import { Element } from "react-scroll";
import { InView } from "react-intersection-observer";
import SectionEntries from "../3-organisms/SectionEntries.jsx";
import ProjectLinks from "../5-atoms/ProjectLinks.jsx";

export default function Sections(props) {
    const content = props.content;

    const sections = Object.values(content)?.map((sec) => {
        const title = sec.section_title;
        const intro = sec.section_intro;
        const id = sec.section_title.replace(/\s/g, "");

        return (
            <InView key={id} threshold={0} rootMargin={"-60px 0% -90% 0%"}>
                {({ ref, inView }) => (
                    <section id={id} ref={ref} className={inView ? "active" : "inactive"} aria-selected={inView}>
                        <Element type={"react-scroll-element"} name={sec.section_title.replace(/\s/g, "")}>

                            {/* Section title */}
                            {title && (
                                <div className={`title-container section ${title.replace(/\s/g, "")} ${inView ? "active" : "inactive"}`}>
                                    {title && <h2>{title}</h2>}
                                    {intro && <p className="section-intro">{intro}</p>}
                                </div>
                            )}

                            {/* Each of the section entries */}
                            <SectionEntries content={sec} />

                            {/* Link(s) at the end of the section */}
                            {sec.links && (
                                <div className="section-link">
                                    <ProjectLinks links={sec.links} />
                                </div>
                            )}

                        </Element>
                    </section>
                )}
            </InView>
        );
    });

    return (
        <>
            {sections}
        </>
    )
}