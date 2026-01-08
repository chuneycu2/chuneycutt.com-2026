import { Link } from "react-router-dom";
import type Skill from "../types/post.d.ts"

export default function ProjectSkills(props) {

	const skills: Skill[] = props.skills;

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
