import Titles from "./Titles.js";
import Menu from "../3-organisms/Menu.tsx";
import SocialLinks from "../5-atoms/SocialLinks.tsx";
import type MenuSidebar from "../types/post.d.ts";

export default function Sidebar(props) {

    const {
        name,
        title,
        intro,
        slug,
        links,
        sections,
        socials
    }:MenuSidebar[] = props;

    return (
        <section className={`sidebar ${slug} col-12 col-md-4`}>
            <Titles name={name} title={title} intro={intro} links={links} />
            <Menu sections={sections} />
            {(socials.linkedin || socials.github || socials.email) && (
                <SocialLinks links={socials} />
            )}
        </section>
    )
}