import SectionTitles from "./SectionTitles.jsx";
import SectionEntries from "../3-organisms/SectionEntries.jsx"

export default function Content() {
    return (
        <section className="content col-12 col-md-7 px-0">
            {/* programmatically render each section title */}
            <SectionTitles />

            {/* programmatically map through sections and render each */}
            <div className="section-entries">
                <SectionEntries />
                {/* add end of section link if it exists */}
            </div>

        </section>
    )
}