import ProjectLinks from "../5-atoms/ProjectLinks.tsx";

export default function Titles(props) {
	return (
		<>
			<div className="title-container fade fade-right">
				{props.name && <h1>{props.name}</h1>}
				{props.title && <h2>{props.title}</h2>}
				{props.links && <ProjectLinks links={props.links} />}
				{props.intro && <p className="intro">{props.intro}</p>}
			</div>
		</>
	);
}
