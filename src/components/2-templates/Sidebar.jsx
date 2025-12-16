import Titles from "./Titles";
import Menu from "../3-organisms/Menu";

export default function Sidebar(props) {
    const { name, title, intro, content, slug, isActive } = props;
    return (
        <>
            <section className={`sidebar ${slug} ${isActive ? 'true' : 'false'} col-12 col-md-5 d-flex flex-column pl-0 pr-0 pr-md-5`}>
                <Titles name={name} title={title} intro={intro} />
                <Menu sections={content} />
            </section>
        </>
    )
}