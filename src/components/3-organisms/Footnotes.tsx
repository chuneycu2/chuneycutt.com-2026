export default function Footnotes(props) {

    const footnotes: string = props.footnotes;

    if (footnotes) {
        return (
            <aside className="footnotes col-12 pt-4 mt-5 px-0">
                <p>{footnotes}</p>
            </aside>
        )
    }
}