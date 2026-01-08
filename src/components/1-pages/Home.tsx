import { useEffect } from "react";
import { useRouteLoaderData } from "react-router";

import DataParser from "../data/DataParser";
import Sidebar from "../2-templates/Sidebar.tsx";
import Content from "../2-templates/Content.tsx";

export default function Home() {

	// Fetch page data
	const data = useRouteLoaderData("root-data");
	const pageData = DataParser(data[0].posts);
	const slug = pageData[0].slug;
	const thisPage = pageData[0].acf;
	console.log(thisPage);

	// Set page title
	useEffect(() => {
		if (slug === "home")
			document.title = "Cyrus Huneycutt | Front-End Developer";
		else document.title = "Cyrus Huneycutt | " + thisPage.name;
	}, [slug, thisPage]);

	return (
		<div className={`container-main ${slug} row m-0`}>
			<Sidebar
				name={thisPage.name}
				title={thisPage.title}
				intro={thisPage.intro}
				slug={slug}
				links={thisPage.links}
				sections={thisPage.components_react}
				socials={thisPage.social_links}
			/>
			<Content
				content={thisPage.components_react}
				slug={slug}
				footnotes={thisPage.footnotes}
			/>
		</div>
	);
}
