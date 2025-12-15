import { useLoaderData } from "react-router";
import { useRef, useEffect } from 'react';

import Sidebar from "../2-templates/Sidebar.jsx";
import Content from "../2-templates/Content.jsx";
import DataParser from "../data/DataParser.js";
import Footnote from "../3-organisms/Footnotes.jsx";

export default function Home() {
    const ref = useRef();
    useEffect(() => {
        console.log('ref', ref.current);
    }, []);

    // Fetch page and media data
    const data = useLoaderData();
    const pageData = DataParser(data[0].posts);
    const slug = pageData[0].slug;
    console.log(slug);
    const mediaData = data[0]?.media;
    const thisPage = pageData[0].acf;

    return (
        <div className={`container-main ${slug} row m-0`}>
            <Sidebar name={thisPage.name} title={thisPage.title} intro={thisPage.intro} content={thisPage.components_react} slug={slug} />
            <Content content={thisPage?.components_react} media={mediaData ? mediaData : ''} />
            <Footnote footnotes={thisPage.footnotes}/>
        </div>
    )
}