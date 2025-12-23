import { Link } from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component';

import ProjectSkills from "../5-atoms/ProjectSkills";


export default function Projects(props) {
    const { content, media } = props;
    const projectImage = media?.filter((img) => {
        if (img.id === content?.project_image) {
            return img;
        }
    });

    return (
        <div className="entry-container">
            <Link to={content.project_link}>
                <div className="row p-0 m-0">
                    <div className="project-thumbnail col-12 col-sm-3 pl-0 pr-0 pr-sm-3">
                        <LazyLoadImage
                            alt={media && projectImage[0].alt_text}
                            height="100"
                            src={media && projectImage[0].source_url}
                            width="200" />
                    </div>
                    <div className="project-info col-12 col-sm-9 px-0">
                        {content.project_title && <h3>{content.project_title}</h3>}
                        {content.project_company && <p className="entry-subtitle">{content.project_company}</p>}
                        {content.project_intro && <p className="entry-description">{content.project_intro}</p>}
                        {content.skills && <ProjectSkills skills={content.skills}/>}
                    </div>
                </div>
            </Link>
        </div>
    )
}