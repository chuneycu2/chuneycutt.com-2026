import DOMPurify from "dompurify";
import { LazyLoadImage } from "react-lazy-load-image-component";

import ProjectLinks from "../5-atoms/ProjectLinks.tsx";
import CyrusPic from "../../assets/img/cyrus-pic.jpg";

export default function About(props) {
	const content = props.content;

	// Get the WYSIWYG content and sanitize it for good measure
	const editorContent = content.entries?.map((entry) => entry.wysiwyg);
	const cleanHTML: string = DOMPurify.sanitize(editorContent, {
		ADD_ATTR: ["target"],
	});

	const bioCard = content.about_me ? (
		<div className="bio-card d-flex pb-4">
			<LazyLoadImage
				alt="Cyrus Huneycutt headshot"
				height="75"
				src={`${CyrusPic}`}
				width="75"
			/>
			<div className="bio">
				<h3>Cyrus Huneycutt</h3>
				<p className="entry-subtitle">{content.about_me.location}</p>
				<ProjectLinks links={content.about_me.links} />
			</div>
		</div>
	) : (
		""
	);

	return (
		<div className="entry-container fade fade-in">
			{bioCard && bioCard}
			<div
				className="section-content"
				dangerouslySetInnerHTML={{ __html: cleanHTML }}
			></div>
		</div>
	);
}
