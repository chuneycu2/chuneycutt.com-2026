export default async function DataLoader() {
	
	// WPEngine Cloudflare cache is min-age 600s (10min)
	// Fetch with a timestamp to bust cache:
	const timestamp = new Date().getTime();
	const domain = "https://chuneycutt.wpenginepowered.com";
	const postsEndpoint = "/wp-json/wp/v2/posts/";
	const publishedPages = "14";

	// await fetch results from posts, then media in sequence
	async function fetchPosts() {
		const posts = await fetch(
			domain + postsEndpoint + "?time=" + timestamp + "&per_page=" + publishedPages,
		);
		const postData = await posts.json();
		return { posts: postData };
	}

	async function awaitData() {
		const pages = await Promise.all([fetchPosts()]);
		//console.log("data fetched");
		return pages;
	}

	return awaitData();
}
