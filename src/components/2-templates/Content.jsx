import { Element } from "react-scroll";
import { InView } from "react-intersection-observer";

import SectionEntries from "../3-organisms/SectionEntries";
import ProjectLinks from "../5-atoms/ProjectLinks";
import Footnote from "../3-organisms/Footnotes.jsx";

export default function Content(props) {
	const { content, footnotes } = props;

	const sections = Object.values(content)?.map((sec) => {
		const title = sec.section_title;
		const intro = sec.section_intro;
		const id = sec.section_title.replace(/\s/g, "");

		return (
			<InView threshold={0} rootMargin={"-60px 0% -90% 0%"} key={id}>
				{({ ref, inView }) => (
					<section
						id={id}
						ref={ref}
						className={inView ? "active" : "inactive"}
						aria-selected={inView ? true : false}
					>
						<Element
							type={"react-scroll-element"}
							name={sec.section_title.replace(/\s/g, "")}
						>
							{title && (
								<div
									className={`title-container section ${title.replace(/\s/g, "")} ${inView ? "active" : "inactive"}`}
								>
									{title && <h2>{title}</h2>}
									{intro && <p className="section-intro">{intro}</p>}
								</div>
							)}
							<div className="section-entries">
								<SectionEntries content={sec} key={title} />
							</div>
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
		<section
			id="content"
			className={`content col-12 col-md-8 px-0 fade fade-in`}
		>
			{sections}
			<Footnote footnotes={footnotes} />
		</section>
	);
}
