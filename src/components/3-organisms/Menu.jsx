export default function Menu(props) {

    // Assemble menu items from component sections present in the data
    const sections  = props.sections;
    const menuItems = sections?.map(sec => (
        <li key={sec.section_title}>
            <a href={'#' + sec.section_title.replace(/\s/g, '')}>{sec.section_title}</a>
        </li>
    ));

    if (sections) {
        return (
            <nav className="menu-container">
                <ul className="menu">
                    {menuItems}
                </ul>
            </nav>
        )
    }
}