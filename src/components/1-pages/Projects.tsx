import { useEffect } from "react";
import { useRouteLoaderData } from "react-router";
import DataParser from "../data/DataParser.ts";

import ProjectCard from "../4-molecules/ProjectCard.tsx";
import ProjectLinks from "../5-atoms/ProjectLinks.tsx";

export default function Projects() {
	// Fetch page and media data
	const data = useRouteLoaderData("root-data");
	const pageData = DataParser(data[0].posts);
	const mediaData = data[0].media;
	const thisPage = pageData[0].acf;

	// Set page title
	useEffect(() => {
		document.title = "Cyrus Huneycutt | Project Archive";
	}, []);

	return (
		<div className="container-main project-archive m-0">
			<section className="row d-flex align-items-top p-0 m-0">
				<div className="title-container col-12 col-md-5 col-lg-4 pl-0 pr-4 pb-3 pb-md-0 fade fade-right">
					<h1 className="pb-1">
						{thisPage.title ? thisPage.title : "Project Archive"}
					</h1>
					<ProjectLinks
						links={[
							{
								link_icon: "back",
								link_text: "Cyrus Huneycutt",
								link_url: "/",
								link_target: "_self",
							},
						]}
					/>
				</div>
				{thisPage.intro && (
					<div className="section-intro col-12 col-md-7 col-lg-8 px-0 pt-2">
						<p>{thisPage.intro}</p>
					</div>
				)}
			</section>
			<section className="project-cards section-entries row px-0 mx-0 fade fade-in">
				<ProjectCard content={thisPage.components_react} media={mediaData} />
			</section>
		</div>
	);
}
