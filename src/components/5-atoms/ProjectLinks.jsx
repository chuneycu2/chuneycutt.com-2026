import IconNewPage from "./icons/IconNewPage.jsx";
import IconSamePage from "./icons/IconSamePage.jsx";

export default function ProjectLinks() {
    return (
        <div className="project-links d-flex">
            {/* Programmatically return <Link/> router elements for internal link */}
            <div className="link external">
                <IconNewPage />
                <a className="pr-3" href="/" target="_blank">instaclustr.com</a>
            </div>
            <div className="link internal">
                <IconSamePage/>
                <a className="pr-3" href="/projects" target="_self">spot.io</a>
            </div>
        </div>
    )
}