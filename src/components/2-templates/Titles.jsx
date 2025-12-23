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

    const link = [
        {
            link_text : "Project Archive",
            link_url : "/projects",
            link_target : "_self"
        }];

    const linkStructure = () => {
        if (props.link) return <ProjectLinks links={links} />
        else if (props.slug !== 'home') return <ProjectLinks links={link} />
    }

    return (
        <>
            <div className="title-container fade fade-right">
                {props.name && <h1>{props.name}</h1>}
                {props.title && <h2>{props.title}</h2>}
                {linkStructure()}
                {props.intro && <p className="intro">{props.intro}</p>}
            </div>
        </>
    )
}