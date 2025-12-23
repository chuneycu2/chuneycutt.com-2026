import { Link, scrollSpy } from 'react-scroll';
import { useEffect } from "react";

export default function DesktopNav(props) {

    const navItems = props.navItems;

    useEffect(() => {
        scrollSpy.update();
    }, []);

    return (
        <nav className="menu-container d-none d-md-block fade fade-right">
            <ul className="menu">
                {navItems}
            </ul>
        </nav>
    )
}