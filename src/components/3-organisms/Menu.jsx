import { Link, scrollSpy } from 'react-scroll';
import { InView } from 'react-intersection-observer'
import { useEffect } from 'react';

export default function Menu(props) {
    const isActive = props.isActive;

    useEffect(() => {
        scrollSpy.update();
    }, []);

    const sections  = props.sections;
    const menuItems = sections?.map((sec) => (
        <li key={sec.section_title}>
            <Link
                activeClass="active"
                spy={true}
                to={sec.section_title.replace(/\s/g, '')}
                smooth={true}
                duration={500}
                offset={-40}
                spyThrottle={0}>
                {sec.section_title}
            </Link>
        </li>
    ));
    const mobileMenuItems = sections?.map((sec) => (
        <option key={sec.section_title} value={sec.section_title.replace(/\s/g, '')}>
            {sec.section_title}
        </option>
    ));

    if (sections) {
        return (
            <>
                <nav className="menu-container d-none d-md-block">
                    <ul className="menu">
                        {menuItems}
                    </ul>
                </nav>
                    <nav className={`menu-mobile-container d-flex d-md-none ${isActive ? 'mobile-active' : ''}`}>
                        <select id="mobileMenu" className="h2">
                            {mobileMenuItems}
                        </select>
                    </nav>
            </>
        )
    }
}