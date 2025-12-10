import { useLoaderData } from "react-router";

import Sidebar from "../2-templates/Sidebar.jsx";
import Content from "../2-templates/Content.jsx";
import DataParser from "../data/DataParser.js";
import Footnote from "../3-organisms/Footnotes.jsx";

export default function Home() {

    // Fetch page data
    const data  = useLoaderData();
    const pageData = DataParser(data);
    const thisPage = pageData[0].acf; // get only ACF data here

    return (
        <div className="container-main home row m-0">
            <Sidebar name={thisPage.name} title={thisPage.title} intro={thisPage.intro} content={thisPage.components_react} />
            <Content content={thisPage.components_react} />
            <Footnote footnotes={thisPage.footnotes}/>
        </div>
    )
}