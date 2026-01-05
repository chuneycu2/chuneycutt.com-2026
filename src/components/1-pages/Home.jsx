import { useEffect } from "react";
import { useRouteLoaderData } from "react-router";

import DataParser from "../data/DataParser";
import Titles from "../2-templates/Titles";
import Menu from "../3-organisms/Menu";
import SocialLinks from "../5-atoms/SocialLinks";
import Content from "../2-templates/Content";

export default function Home() {
	// Fetch page and media data if state is empty
	const data = useRouteLoaderData("root-data");
	console.log(data);
	const pageData = DataParser(data[0].posts);
	const slug = pageData[0].slug;
	const thisPage = pageData[0].acf;
	const { linkedin, github, email } = thisPage.social_links;

	// Set page title
	useEffect(() => {
		if (slug === "home")
			document.title = "Cyrus Huneycutt | Front-End Developer";
		else document.title = "Cyrus Huneycutt | " + thisPage.name;
	}, [slug, thisPage]);

	return (
		<div className={`container-main ${slug} row m-0`}>
			{/* Sidebar with observer for active/inactive states */}
			<section className={`sidebar ${slug} col-12 col-md-4`}>
				<Titles
					name={thisPage.name}
					title={thisPage.title}
					intro={thisPage.intro}
					slug={slug}
					links={thisPage.links}
				/>
				<Menu sections={thisPage.components_react} />
				{(linkedin || github || email) && (
					<SocialLinks links={thisPage.social_links} />
				)}
			</section>

			{/* All scrollable content sections */}
			<Content
				content={thisPage?.components_react}
				slug={slug}
				footnotes={thisPage?.footnotes}
			/>
		</div>
	);
}
