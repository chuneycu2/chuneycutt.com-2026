import ProjectLinks from "../5-atoms/ProjectLinks.jsx";

export default function Titles(props) {
	console.log(props);

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
