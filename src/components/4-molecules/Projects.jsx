import SampleImg from "../../assets/img/sample-project-thumbnail.jpg";
import ProjectLinks from "../5-atoms/ProjectLinks.jsx";


export default function Projects(props) {
    {/* add logic to fetch thumbnail images from media API? or do this at top level? */}
    return (
        <div className="entry-container">
            {/* programmatically map through props to render each experience */}
            <h3>Instaclustr.com</h3>
            <p className="entry-subtitle">NetApp Instaclustr</p>
            <div className="d-block d-sm-flex">
                <div className="project-thumbnail">
                    <img src={SampleImg} alt="sample thumbnail" />
                </div>
                <div className="project-info">
                    <p className="entry-description">As part of an acquisition by NetApp, the site was built on a dated codebase that was inflexible and poorly optimized. Before redesigning the front end, I set up a development pipeline and cleaned out the codebase.</p>
                    {/*add links*/}
                </div>
            </div>
        </div>
    )
}