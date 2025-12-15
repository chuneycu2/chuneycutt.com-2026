import { Element } from 'react-scroll';
import { useRef } from 'react';
import { InView } from 'react-intersection-observer'

import SectionTitles from "./SectionTitles";
import SectionEntries from "../3-organisms/SectionEntries"
import ProjectLinks from "../5-atoms/ProjectLinks";

export default function Content(props) {
    const { content, media } = props;
    const thresholdRef = useRef(null);

    const sections = content.map((sec) => {
        const title = sec.section_title;
        const id = sec.section_title.replace(/\s/g, "");
        return (
            <InView threshold={.25} rootMargin={"32px 0px"} key={id}>
                {({ref, inView}) => (
                    <section ref={ref} className={inView ? 'active' : 'inactive'}>
                        <Element type={"react-scroll-element"} name={sec.section_title.replace(/\s/g, '')}>
                            <SectionTitles title={sec.section_title} intro={sec.section_intro}/>
                            <div className="section-entries">
                                <SectionEntries content={sec} media={media} key={title} />
                                {sec.links && <ProjectLinks links={sec.links}/>}
                            </div>
                        </Element>
                    </section>
                )}
            </InView>
        )
    });

    return (
        <section className="content col-12 col-md-7 px-0">
            <div ref={thresholdRef} id="observerTop"></div>
            {sections}
        </section>
    )
}