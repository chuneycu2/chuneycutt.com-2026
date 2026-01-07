import Sections from "./Sections.jsx";
import Footnote from "../3-organisms/Footnotes.jsx";

export default function Content(props) {
	const { content, footnotes } = props;

	return (
		<section id="content" className={`content col-12 col-md-8 px-0 fade fade-in`}>
			<Sections content={content} />
			<Footnote footnotes={footnotes} />
		</section>
	);
}
