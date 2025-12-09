import Home from './1-pages/Home.jsx'
import Projects from './1-pages/Projects.jsx'

export default function Main() {
    return (
        <main>
            <div className="container-fluid p-0">
                {/*<Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/projects" element={<Projects/>} />
                </Routes>*/}
                <Home />
            </div>
        </main>
    )
}