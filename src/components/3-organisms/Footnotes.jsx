export default function Footnotes(props) {
    if (props.footnotes) {
        return (
            <aside className="footnotes col-12 col-md-5 pt-4 mt-5 pt-md-0 mt-md-0 pl-0 pr-0 pr-md-5">
                <p>{props.footnotes}</p>
            </aside>
        )
    }
}