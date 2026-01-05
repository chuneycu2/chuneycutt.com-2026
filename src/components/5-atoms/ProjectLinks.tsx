import { Link } from "react-router-dom";

import IconNewPage from "./icons/IconNewPage.tsx";
import IconSamePage from "./icons/IconSamePage.tsx";

export default function ProjectLinks(props) {
	interface Link {
		link_icon: string
		link_text: string
		link_url: string
		link_target: string
	}
	const links: Link[] = props.links;

	const linkItems = links.map((link) => (
		<div
			key={link.link_text}
			className={`${link.link_target} link ${link.link_icon}`}
		>
			<Link className="pr-3" to={link.link_url} target={link.link_target}>
				{link.link_target === '_blank' ? <IconNewPage /> : <IconSamePage />}
				{link.link_text}
			</Link>
		</div>
	));

	return (
		<div className="project-links">
			{linkItems}
		</div>
	);
}
