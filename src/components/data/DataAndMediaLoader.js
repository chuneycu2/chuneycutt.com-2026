export default async function DataAndMediaLoader() {

    // WPEngine Cloudflare cache is min-age 600s (10min)
    // Recompile endpoints with a timestamp to bust cache if needed during development:
    let timestamp = (new Date()).getTime();
    // ...endpoint += '?time=' + timestamp;

    let domain = 'https://www.chuneycutt.com/';
    let postsEndpoint = 'wp-json/wp/v2/posts/';
    let mediaEndpoint = 'wp-json/wp/v2/media/';

    // Use post data to fetch related media files
    async function fetchPostMedia(data) {

        // reuses DataParser.js logic outside of React hook context
        const location = window.location;
        let projectMatch = '^\\/projects\\/.*';
        let projectPaths = location.pathname.split('/').filter(Boolean);
        let projectSlug = projectPaths.pop();
        let thisPage = '';

        // filter page data needed based on location
        if (location.pathname === '/')
            thisPage = data.filter(page => page.slug === 'home');
        if (location.pathname === '/projects')
            thisPage = data.filter(page => page.slug === 'projects');
        if (location.pathname.match(projectMatch))
            thisPage = data.filter(page => page.slug === projectSlug);


        // find out if Projects exists; if so, get their image IDs
        const components = thisPage[0].acf.components_react;
        let projects = null;
        let accolades = null;
        let imageIDs = [];

        // check for specific component types that contain images
        Object.values(components)?.forEach((component) => {
            if (component.acf_fc_layout === 'projects') {
                projects = component.entries;
                projects.map((project) => {
                    project.project_image && imageIDs.push(project.project_image);
                })
            }
            if (component.acf_fc_layout === 'accolades') {
                accolades = component.entries;
                accolades.map((accolade) => {
                    accolade.attribution_image && imageIDs.push(accolade.attribution_image);
                })
            }
        })

        // Fetch data for each imageID sequentially and then return the responses together
        const fetchMedia = async (ids) => {
            try {
                const fetchPromises = ids.map(id => fetch(domain + mediaEndpoint + id + '?time=' + timestamp));
                const responses = await Promise.all(fetchPromises);
                // convert all responses to JSON (another set of promises)
                const data = await Promise.all(responses.map(res => {
                    if (!res.ok) throw new Error("Fetch failed");
                    return res.json();
                }));
                return data;
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        return fetchMedia(imageIDs);
    }

    // Await fetch results from posts, then media in sequence
    async function fetchPostsAndMedia() {
        // check state before rendering

        const posts = await fetch(domain + postsEndpoint);
        const postData = await posts.json();
        const mediaData = await fetchPostMedia(postData);

        return { posts: postData, media: mediaData }
    }

    async function awaitData() {
        const pages = await Promise.all([
            fetchPostsAndMedia()
        ]);
        console.log('data fetched');
        return pages;
    }

    return awaitData();
}