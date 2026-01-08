import ProjectSkills from "../5-atoms/ProjectSkills.tsx";
import IconSamePage from "../5-atoms/icons/IconSamePage.tsx";
import { Link } from "react-router-dom";
import type ProjectEntry from "../types/post.d.ts";

export default function ProjectCard(props) {

	const { content }:ProjectEntry[] = props;

	const cards = content.map((card) => {
		// get the single entry within each ACF flexible content layout
		const cardContent = card?.entries[0];

		// set up link for card container
		const cardLink = cardContent.links[0]?.link_url;

		return (
			<article key={cardContent.id} className="project-card section-entry">
				<Link to={cardLink} className="entry-container" aria-label={`Read more about Cyrus's work on ${cardContent.project_title}`}>
					<div
						className="card-image"
						style={{
							backgroundImage: `url('${cardContent.project_image_link}')`,
						}}
					></div>
					<div className="card-content d-flex justify-content-between align-items-start">
						<div className="card-content-inner">
							{cardContent.project_title ? (
								<h3>{cardContent.project_title}</h3>
							) : (
								""
							)}
							{cardContent.project_year ? (
								<p className="entry-subtitle">{cardContent.project_year}</p>
							) : (
								""
							)}
						</div>
						{/* <div className="card-arrow">
							<IconSamePage />
						</div>*/}
						<div className="card-cta d-flex align-items-center">
							<p className="pb-0 pr-1">Read more</p>
							<IconSamePage />
						</div>
					</div>
					<div className="card-skills">
						{cardContent.skills ? (
							<ProjectSkills skills={cardContent.skills} />
						) : (
							""
						)}
					</div>
				</Link>
			</article>
		);
	});

	return <>{cards}</>;
}
