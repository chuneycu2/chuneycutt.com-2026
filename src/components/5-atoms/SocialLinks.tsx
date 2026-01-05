import IconEmail from "./icons/IconEmail";
import IconGitHub from "./icons/IconGitHub";
import IconLinkedIn from "./icons/IconLinkedIn";

export default function SocialLinks(props) {
    interface SocialLinks {
        linkedin: string
        github: string
        email: string
    }
    const { email, github, linkedin }: SocialLinks[] = props.links;

    return (
        <aside className="social-links">
            {linkedin && <a href={linkedin} target="_blank"><IconLinkedIn /></a>}
            {github && <a href={github} target="_blank"><IconGitHub /></a>}
            {email && <a href={email}><IconEmail /></a>}
        </aside>
    )
}