import IconQuote from "../5-atoms/icons/IconQuote.tsx";

export default function Accolades(props) {
	const { content } = props;

	return (
		<>
			<div className="entry-container">
				<div className="accent-line"></div>
				<IconQuote type={"top-icon"} />
				<div className="quote-container">
					<blockquote>{content.accolade}</blockquote>
					<div className="bio-card d-flex align-items-center">
						{/* <LazyLoadImage
							alt={content.attribution_name + " headshot"}
							height="75"
							src={content.attribution_image_link}
							width="75"
						/>*/}
						<div className="bio">
							<h3 className="pb-0">{content.attribution_name}</h3>
							<p className="entry-subtitle">{content.attribution_title}</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
