export default async function DataLoader() {

    let url = 'https://www.chuneycutt.com/wp-json/wp/v2/posts/';

    // WPEngine Cloudflare cache is min-age 600s (10min)
    // Recompile with timestamp to bust cache if needed during development:
    // let timestamp = (new Date()).getTime();
    // url += '?time=' + timestamp;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Data fetched successfully:", data);
        return data;
    } catch (error) {
        console.error("Error during fetch operation:", error);
    }
}