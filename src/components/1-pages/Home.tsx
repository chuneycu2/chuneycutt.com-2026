import { useEffect } from "react";
import { useRouteLoaderData } from "react-router";
import DataParser from "../data/DataParser";
import Sidebar from "../2-templates/Sidebar.tsx";
import Content from "../2-templates/Content.tsx";
import type Acf from "../types/post.d.ts";

export default function Home() {

	// Fetch page data
	const data = useRouteLoaderData("root-data");
	const pageData = DataParser(data[0].posts);
	const slug = pageData[0].slug;
	const thisPage:Acf[] = pageData[0].acf;

	// Set page title
	useEffect(() => {
		if (slug === "home")
			document.title = "Cyrus Huneycutt | Front-End Developer";
		else document.title = "Cyrus Huneycutt | " + thisPage.name;
	}, [slug, thisPage]);

	return (
		<div className={`container-main ${slug} row m-0`}>
			<Sidebar
				content={thisPage}
				slug={slug}
			/>
			<Content
				content={thisPage.components_react}
				slug={slug}
				footnotes={thisPage.footnotes}
			/>
		</div>
	);
}
