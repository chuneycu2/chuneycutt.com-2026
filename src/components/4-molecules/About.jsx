import ProjectLinks from "../5-atoms/ProjectLinks.jsx";

export default function About() {
    return (
        <div className="entry-container">
            <div className="bio-card d-flex">
                <img src="cyrus.jpeg" alt="cyrus" />
                <div className="bio">
                    <h3>Cyrus Huneycutt</h3>
                    <p className="entry-subtitle">Durham, NC, USA</p>
                    <ProjectLinks />
                </div>
            </div>
        </div>
    )
}