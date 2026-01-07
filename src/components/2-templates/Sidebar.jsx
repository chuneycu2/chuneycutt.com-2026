import Titles from "./Titles";
import Menu from "../3-organisms/Menu";
import SocialLinks from "../5-atoms/SocialLinks.jsx";

export default function Sidebar(props) {
    const { name, title, intro, slug, links, sections, socials } = props;
    return (
        <section className={`sidebar ${slug} col-12 col-md-4`}>
            <Titles name={name} title={title} intro={intro} slug={slug} links={links} />
            <Menu sections={sections} />
            {(socials.linkedin || socials.github || socials.email) && (
                <SocialLinks links={socials} />
            )}
        </section>
    )
}