import { Link } from "react-router-dom";
import IconNewPage from "./icons/IconNewPage.tsx";
import IconSamePage from "./icons/IconSamePage.tsx";
import type Anchor from "../types/post.d.ts"

export default function ProjectLinks(props) {

	const links: Anchor[] = props.links;

	const linkItems = links.map((link) => (
		<div
			key={link.link_text}
			className={`${link.link_target} link ${link.link_icon}`}
		>
			<Link className="pr-3" to={link.link_url} target={link.link_target} aria-label={link.link_text}>
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
