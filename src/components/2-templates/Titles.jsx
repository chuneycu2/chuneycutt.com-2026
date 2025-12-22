import ProjectLinks from "../5-atoms/ProjectLinks.jsx";
import React from "react";

export default function Titles(props) {

    const links = [
        {
            link_text : "Project Archive",
            link_url : "/projects",
            link_target : "_self"
        },
        {
            link_text : props.link,
            link_url : "https://www." + props.link,
            link_target : "_blank"
        }]

    return (
        <>
            <div className="title-container">
                {/* programmatically add title info based on page URL */}
                {props.name && <h1>{props.name}</h1>}
                {props.title && <h2>{props.title}</h2>}
                {props.slug !== 'home' && <ProjectLinks links={links} />}
                {props.intro && <p className="intro">{props.intro}</p>}
            </div>
        </>
    )
}