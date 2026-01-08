import IconEmail from "./icons/IconEmail.tsx";
import IconGitHub from "./icons/IconGitHub.tsx";
import IconLinkedIn from "./icons/IconLinkedIn.tsx";
import type Socials from "../types/post.d.ts";

export default function SocialLinks(props) {

    const { email, github, linkedin }: Socials[] = props.links;

    return (
        <aside className="social-links">
            {linkedin && <a href={linkedin} target="_blank"><IconLinkedIn /></a>}
            {github && <a href={github} target="_blank"><IconGitHub /></a>}
            {email && <a href={email}><IconEmail /></a>}
        </aside>
    )
}