import IconQuote from "../5-atoms/icons/IconQuote";
import CyrusPic from "../../assets/img/cyrus-pic.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Accolades(props) {
	const { content, media } = props;

	// Get attribution image by filtering for matching ID
	const attributionImage = media?.filter((img) => {
		if (img.id === content?.attribution_image) {
			return img;
		}
	});

	return (
		<>
			<div className="entry-container">
				<div className="accent-line"></div>
				<IconQuote type={"top-icon"} />
				<div className="quote-container">
					<blockquote>{content.accolade}</blockquote>
					<div className="bio-card d-flex align-items-center">
						<LazyLoadImage
							alt={attributionImage[0].source_url}
							height="75"
							src={attributionImage[0].source_url}
							width="75"
						/>
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
