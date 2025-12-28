export default async function DataAndMediaLoader() {
	// WPEngine Cloudflare cache is min-age 600s (10min)
	// Fetch with a timestamp to bust cache:
	let timestamp = new Date().getTime();
	let domain = "https://www.chuneycutt.com/";
	let postsEndpoint = "wp-json/wp/v2/posts/";

	// await fetch results from posts, then media in sequence
	async function fetchPosts() {
		const posts = await fetch(
			domain + postsEndpoint + "?time=" + timestamp + "&per_page=100",
		);
		const postData = await posts.json();

		return { posts: postData };
	}

	async function awaitData() {
		const pages = await Promise.all([fetchPosts()]);
		console.log("data fetched");
		return pages;
	}

	return awaitData();
}
