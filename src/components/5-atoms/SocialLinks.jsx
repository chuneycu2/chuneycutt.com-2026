import IconEmail from "./icons/iconEmail";
import IconGitHub from "./icons/IconGitHub";
import IconLinkedIn from "./icons/IconLinkedIn";

export default function SocialLinks(props) {
    const { email, github, linkedin } = props.links;
    return (
        <aside className="social-links">
            {linkedin && <a href={email}><IconLinkedIn /></a>}
            {github && <a href={email}><IconGitHub /></a>}
            {email && <a href={email}><IconEmail /></a>}
        </aside>
    )
}