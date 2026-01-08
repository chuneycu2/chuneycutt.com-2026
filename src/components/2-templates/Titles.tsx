import ProjectLinks from "../5-atoms/ProjectLinks.tsx";
import type MenuTitles from "../types/post.d.ts";

export default function Titles(props) {

	const { name, title, intro, links }:MenuTitles[] = props

	return (
		<>
			<div className="title-container fade fade-right">
				{name && <h1>{name}</h1>}
				{title && <h2>{title}</h2>}
				{links && <ProjectLinks links={links} />}
				{intro && <p className="intro">{intro}</p>}
			</div>
		</>
	);
}
