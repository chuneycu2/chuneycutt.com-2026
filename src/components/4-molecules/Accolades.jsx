import IconQuote from "../5-atoms/icons/iconQuote";

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
                {/* programmatically map through props to render each skill/tool */}
                <div className="accent-line"></div>
                <IconQuote type={"top-icon"} />
                <div className="quote-container">
                    <blockquote>{content.accolade}</blockquote>
                </div>
            </div>
            <div className="bio-card d-flex align-items-center">
                <img src={attributionImage[0].source_url} alt={attributionImage[0].source_url}/>
                <div className="bio">
                    <h3>{content.attribution_name}</h3>
                    <p className="entry-subtitle">{content.attribution_title}</p>
                </div>
            </div>
        </>
    )
}