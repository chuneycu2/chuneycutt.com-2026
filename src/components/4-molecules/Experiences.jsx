import ProjectLinks from "../5-atoms/ProjectLinks";
import ProjectSkills from "../5-atoms/ProjectSkills";

export default function Experiences() {
    return (
        <div className="entry-container">
            {/* programmatically map through props to render each experience */}
            <h3>Senior Web Developer &#8226; NetApp, Inc.</h3>
            <p className="entry-subtitle uppercase">2024 — Present</p>
            <p className="entry-description">Develop, optimize, and maintain the cloud ops business unit’s two marketing
                domains. Collaborate with stakeholders across the business to serve as a technical resource for new
                marketing initiatives, from conceptualization to split testing to implementation.</p>
            <ProjectLinks/>
            <ProjectSkills/>
        </div>
    )
}