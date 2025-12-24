import { useEffect, useState } from "react";
import { useRouteLoaderData } from "react-router";
import { InView } from "react-intersection-observer";

import DataParser from "../data/DataParser";
import Titles from "../2-templates/Titles";
import Menu from "../3-organisms/Menu";
import SocialLinks from "../5-atoms/SocialLinks";
import Content from "../2-templates/Content";

export default function Home() {
	const [isActive, setActive] = useState(null);

	// Fetch page and media data if state is empty
	const data = useRouteLoaderData("root-data");
	const pageData = DataParser(data[0].posts);
	const slug = pageData[0].slug;
	const mediaData = data[0]?.media;
	const thisPage = pageData[0].acf;
	const { linkedin } = thisPage.social_links;

	// Set page title
	useEffect(() => {
		if (slug === "home")
			document.title = "Cyrus Huneycutt | Developer + Designer";
		else document.title = "Cyrus Huneycutt | " + thisPage.name;
	}, [slug, thisPage]);

	return (
		<div className={`container-main ${slug} row m-0`}>
			{/* Sidebar with observer for active/inactive states */}
			<InView
				threshold={0.25}
				onChange={(inView) => {
					inView ? setActive(false) : setActive(true);
				}}
			>
				{({ ref }) => (
					<section ref={ref} className={`sidebar ${slug} col-12 col-md-4`}>
						<Titles
							name={thisPage.name}
							title={thisPage.title}
							intro={thisPage.intro}
							slug={slug}
							links={thisPage.links}
						/>
						<Menu sections={thisPage.components_react} isActive={isActive} />
						{linkedin && <SocialLinks links={thisPage.social_links} />}
					</section>
				)}
			</InView>

			<Content
				content={thisPage?.components_react}
				media={mediaData ? mediaData : ""}
				isActive={isActive}
				slug={slug}
				footnotes={thisPage?.footnotes}
			/>
		</div>
	);
}
