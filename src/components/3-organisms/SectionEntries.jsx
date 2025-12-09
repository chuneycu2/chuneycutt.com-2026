import Experiences from "../4-molecules/Experiences";
import SkillsAndTools from "../4-molecules/SkillsAndTools";
import Projects from "../4-molecules/Projects";
import About from "../4-molecules/About";
import Accolades from "../4-molecules/Accolades";
import ProjectLinks from "../5-atoms/ProjectLinks.jsx";

export default function SectionEntries() {
    {/* programmatically map through data to render each article */}
    return (
        <>

            {/*
            programmatically determine which component to use for each entry
            multiple articles listed so CSS can be built
            */}
            <article className="section-entry experience">
                <Experiences/>
            </article>

            {/* place end-of-section links outside of articles */}
            <aside>
                <ProjectLinks/>
            </aside>

            <article className="section-entry skill-tool">
                <SkillsAndTools/>
            </article>
            <aside>
                <ProjectLinks/>
            </aside>

            <article className="section-entry project">
                <Projects/>
            </article>
            <aside>
                <ProjectLinks/>
            </aside>

            <article className="section-entry about">
                <About/>
            </article>
            <aside>
                <ProjectLinks/>
            </aside>

            <article className="section-entry accolade">
                <Accolades/>
            </article>
        </>
    )
}