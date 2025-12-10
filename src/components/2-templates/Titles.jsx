export default function Titles(props) {
    {/* TODO: merge SectionTitles.jsx into this component */}
    return (
        <>
            <div className="title-container">
                {/* programmatically add title info based on page URL */}
                <h1>{props.name}</h1>
                <h2>{props.title}</h2>
                <p className="intro">
                    {props.intro}
                </p>
            </div>
        </>
    )
}