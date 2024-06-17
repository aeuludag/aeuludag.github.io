import { Link, Route, Routes } from "react-router-dom";
import LogicCalculator from "../ProjectComponents/LogicCalculator/LogicCalculator"
import projects from "../../projects"
import "./Projects.css"

function Projects() {
    return <div className="projects">
        <Routes>
            <Route path="" element={<ProjectLinks/>}/>
            <Route path="logic" element={<LogicCalculator />} />
        </Routes>
    </div>
}

function ProjectLinks() {

    return <>
        <h1 className="route-title">Projects</h1>
        <p className="route-description">Here are my web available projects.</p>
        <div>
                {projects.map(({ projectName, route, description }) => {
                    return <div className="project-link-container" key={route}>
                        <ProjectLink projectName={projectName} route={route} description={description} />
                    </div>
                })}
        </div>
    </>
}

function ProjectLink(props) {
    return <>
        <Link className={`project-link link-to-${props.route}`} to={props.route}>
            <img className="project-image" src={`/projectIcons/${props.route}.png`}></img>
            {props.projectName}
        </Link>
        <p className={`project-description desc-to-${props.route}`}>{props.description}</p>
    </>
}

export default Projects;