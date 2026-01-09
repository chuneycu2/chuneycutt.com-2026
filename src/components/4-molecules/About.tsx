import { LazyLoadImage } from "react-lazy-load-image-component";
import DOMPurify from "dompurify";
import ProjectLinks from "../5-atoms/ProjectLinks.tsx";
import CyrusPic from "../../assets/img/cyrus-pic.jpg";
import type {AboutEntry, OverviewEntry} from "../types/post.js";

import Prism from 'prismjs'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import 'prismjs/themes/prism-okaidia.css';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism'

export default function About(props) {

	const { content, type }: AboutEntry[] | OverviewEntry[] = props;

	// Get the WYSIWYG content and sanitize it
	const editorContent = content.entries?.map((entry) => entry.wysiwyg);
	const cleanHTML: string = DOMPurify.sanitize(editorContent, {
		ADD_ATTR: ["target"],
	});

	// Set up code block if it exists (only for Overview Section field)
	let codeContent: string;
	if (type === 'overview-section') {
		codeContent = content.entries?.map((entry) => entry?.code_block).toString();
		if (codeContent !== '') { Prism.highlight(codeContent, Prism.languages.js, 'js'); }
	}

	// Set up bio card markup
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
			{cleanHTML && <div className="section-content" dangerouslySetInnerHTML={{__html: cleanHTML}}></div>}
			{codeContent !== '' &&
				<SyntaxHighlighter
					language="javascript"
					style={okaidia}
					showLineNumbers
				>
					{codeContent}
				</SyntaxHighlighter>
			}
		</div>
	);
}
