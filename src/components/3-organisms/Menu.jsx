import { Link, scrollSpy } from 'react-scroll';
import { useEffect, useState } from 'react';

import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

export default function Menu(props) {
    const sections  = props.sections;
    const isActive = props.isActive;

    useEffect(() => {
        setTimeout(function() {
            scrollSpy.update();
        }, 500);
    }, []);

    const navItems = Object.values(sections)?.map((sec) => {
        if (sec.section_title) {
            return (
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
            )
        }
    });

    const mobileNavItems = Object.values(sections)?.map((sec) => (
        <option key={sec.section_title} value={sec.section_title.replace(/\s/g, '')}>
            {sec.section_title}
        </option>
    ));

    if (sections) {
        return (
            <>
                <DesktopNav navItems={navItems}/>
                {/*<MobileNav mobileNavItems={mobileNavItems} isActive={isActive} />*/}
            </>
        )
    }
}