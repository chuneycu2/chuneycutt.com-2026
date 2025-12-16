import { useLoaderData } from "react-router";
import { InView } from 'react-intersection-observer'
import { useState } from "react";

import Content from "../2-templates/Content";
import DataParser from "../data/DataParser.js";
import Footnote from "../3-organisms/Footnotes";
import Titles from "../2-templates/Titles.jsx";
import Menu from "../3-organisms/Menu.jsx";

export default function Home() {
    const [isActive, setActive] = useState(null);

    // Fetch page and media data
    const data = useLoaderData();
    const pageData = DataParser(data[0].posts);
    const slug = pageData[0].slug;
    const mediaData = data[0]?.media;
    const thisPage = pageData[0].acf;

    return (
        <div className={`container-main ${slug} row m-0`}>
            <InView threshold={.25} onChange={inView => {
                inView ? setActive(false) : setActive(true);
            }}>
                {({ref}) => (
                    <section ref={ref} className={`sidebar ${slug} ${isActive ? 'mobile-active' : ''} col-12 col-md-5 d-flex flex-column pl-0 pr-0 pr-md-5`}>
                        <Titles name={thisPage.name} title={thisPage.title} intro={thisPage.intro}/>
                        <Menu sections={thisPage.components_react} isActive={isActive} />
                    </section>
                )}
            </InView>
            <Content content={thisPage?.components_react} media={mediaData ? mediaData : ''} isActive={isActive} />
            <Footnote footnotes={thisPage.footnotes}/>
        </div>
    )
}