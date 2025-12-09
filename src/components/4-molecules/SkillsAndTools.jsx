import ProjectSkills from "../5-atoms/ProjectSkills";
import IconDevelopment from "../5-atoms/icons/iconDevelopment.jsx";

export default function SkillsAndTools() {
    return (
        <div className="entry-container icon-development">
            {/* programmatically map through props to render each skill/tool */}
            <div className="accent-line"></div>
            <IconDevelopment type={"skill-icon"} />
            <h3>Development</h3>
            <div className="skills-container">
                <div className="skills-category">
                    <p className="entry-subtitle">Frameworks & markup</p>
                    <ProjectSkills/>
                </div>
                <div className="skills-category">
                    <p className="entry-subtitle">Frameworks & markup</p>
                    <ProjectSkills/>
                </div>
            </div>
        </div>
    )
}