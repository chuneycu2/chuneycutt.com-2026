import { Link } from "react-router-dom";

export default function ProjectSkills(props) {
	const skills = props.skills;
	const skillsMap = skills.map((skill) => {
		if (skill.link !== "") {
			return (
				<Link
					key={skill.id}
					to={skill.link}
					className="skill linked"
					target="_blank"
				>
					{skill.skill}
				</Link>
			);
		} else {
			return (
				<div key={skill.id} className="skill">
					{skill.skill}
				</div>
			);
		}
	});

	return <div className="project-skills d-flex">{skillsMap}</div>;
}
