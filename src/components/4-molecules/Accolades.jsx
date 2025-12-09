import ProjectLinks from "../5-atoms/ProjectLinks.jsx";
import IconQuote from "../5-atoms/icons/iconQuote.jsx";
import CyrusPic from "../../assets/img/cyrus-pic.jpg";

export default function Accolades() {
    return (
        <>
            <div className="entry-container">
                {/* programmatically map through props to render each skill/tool */}
                <div className="accent-line"></div>
                <IconQuote type={"top-icon"}/>
                <div className="quote-container">
                    <blockquote>Cyrus is a top-notch developer, an excellent communicator, and a fast learner who
                        handles
                        pressure with grace. He's a great collaborator with excellent project management skills and the
                        ability to optimize workflows, solve complex problems, and implement creative solutions.
                    </blockquote>
                </div>
            </div>
            <div className="bio-card d-flex align-items-center">
                <img src={CyrusPic} alt="cyrus"/>
                <div className="bio">
                    <h3>Cyrus Huneycutt</h3>
                    <p className="entry-subtitle">Durham, NC, USA</p>
                </div>
            </div>
        </>
    )
}