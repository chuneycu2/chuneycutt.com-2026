import { useNavigate } from "react-router";

export default function MobileNav(props) {
    const mobileNavItems = props.mobileNavItems;
    //const sections = props.mobileNavItems;
    const isActive = props.isActive;
    const navigate = useNavigate();

    const navigateTo = (event) => {
        const value = event.target.value;
        //console.log(value);
        navigate('#' + value);
    }

    return (
        <nav className={`menu-mobile-container d-flex d-md-none ${isActive ? 'mobile-active' : ''}`}>
            <select id="mobileMenu" className="h2" onChange={navigateTo}>
                {mobileNavItems}
            </select>
        </nav>
    )
}