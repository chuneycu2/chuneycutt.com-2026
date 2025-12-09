import Sidebar from "../2-templates/Sidebar.jsx";
import Content from "../2-templates/Content.jsx";

export default function Home() {
    return (
        <div className="container-main home row m-0">
            <Sidebar/>
            <Content/>
            {/* TODO: add transitions between pages with useTransition */}
        </div>
    )
}