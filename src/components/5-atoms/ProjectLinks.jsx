import { Link } from "react-router-dom";

import IconNewPage from "./icons/IconNewPage.jsx";
import IconSamePage from "./icons/IconSamePage.jsx";

export default function ProjectLinks(props) {
	const links = props.links;

	const getIcon = (target) => {
		if (target === "_blank") return <IconNewPage />;
		else return <IconSamePage />;
	};

	const linkItems = links.map((link) => (
		<div
			key={link.link_text}
			className={`${link.link_target} link ${link.link_icon}`}
		>
			<Link className="pr-3" to={link.link_url} target={link.link_target} aria-label={link.link_text}>
				{getIcon(link.link_target)}
				{link.link_text}
			</Link>
		</div>
	));

	return <div className="project-links">{linkItems}</div>;
}
