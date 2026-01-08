import Sections from "./Sections.tsx";
import Footnote from "../3-organisms/Footnotes.tsx";
import type Acf from "../types/post.js";

export default function Content(props) {

	const { content, footnotes }:Acf[] = props;

	return (
		<section id="content" className={`content col-12 col-md-8 px-0 fade fade-in`}>
			<Sections content={content} />
			<Footnote footnotes={footnotes} />
		</section>
	);
}
