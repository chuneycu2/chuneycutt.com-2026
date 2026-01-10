import Titles from "./Titles.js";
import Menu from "../3-organisms/Menu.tsx";
import SocialLinks from "../5-atoms/SocialLinks.tsx";
import type MenuSidebar from "../types/post.d.ts";

export default function Sidebar(props) {

    const {
        name,
        title,
        intro,
        links,
        components_react,
        social_links
    }:MenuSidebar[] = props.content;

    const slug: string = props.slug;

    return (
        <section className={`sidebar ${slug} col-12 col-md-4`}>
            <Titles name={name} title={title} intro={intro} links={links} />
            <Menu sections={components_react} />
            {(social_links.linkedin || social_links.github || social_links.email) && (
                <SocialLinks links={social_links} />
            )}
        </section>
    )
}