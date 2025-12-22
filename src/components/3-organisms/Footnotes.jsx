export default function Footnotes(props) {
    if (props.footnotes) {
        return (
            <aside className="footnotes col-12 pt-4 mt-5 px-0">
                <p>{props.footnotes}</p>
            </aside>
        )
    }
}