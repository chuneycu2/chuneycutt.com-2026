import { useState } from 'react';

export default function Menu() {
    const [active, setActive] = useState(false);
    function toggleActive() {
        setActive(prev => {
            return !prev;
        })
    }
    return (
        <nav className="menu-container">
            {/* programmatically add menu items based on section name */}
            <ul className="menu">
                <li className={active ? 'active' : ''}><a onClick={toggleActive} href="#experience">Experience</a></li>
                <li><a href="#skillsAndTools">Skills & Tools</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#accolades">Accolades</a></li>
            </ul>
        </nav>
    )
}