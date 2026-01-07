import { useEffect } from "react";
import { Link, scrollSpy } from "react-scroll";
import { InView } from "react-intersection-observer";

import DesktopNav from "./DesktopNav";
//import MobileNav from "./MobileNav";

export default function Menu(props) {
	const sections = props.sections;

	useEffect(() => {
		setTimeout(function () {
			scrollSpy.update();
		}, 500);
	}, []);

	const navItems = Object.values(sections)?.map((sec) => {

		const title = sec.section_title.replace(/\s/g, "");

		if (sec.section_title) {
			return (
				<li key={sec.section_title}>
					<Link
						activeClass="active"
						spy={true}
						href={title}
						to={title}
						smooth={true}
						duration={500}
						offset={-65}
						spyThrottle={0}
						//aria-current={isActive ? "location" : undefined}
						aria-label={`Scroll to ${title}`}
					>
						{sec.section_title}
					</Link>
				</li>
			);
		}
	});

	// const mobileNavItems = Object.values(sections)?.map((sec) => (
	//   <option
	//     key={sec.section_title}
	//     value={sec.section_title.replace(/\s/g, "")}
	//   >
	//     {sec.section_title}
	//   </option>
	// ));

	if (sections) {
		return (
			<>
				<DesktopNav navItems={navItems} />
				{/*<MobileNav mobileNavItems={mobileNavItems} isActive={isActive} />*/}
			</>
		);
	}
}
