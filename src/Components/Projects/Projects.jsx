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
        <p className="route-description">Here are some of the projects I've made so far.</p>
        <div className="project-links">
                {projects.map(({ id, projectName, route, info, description, available }) => {
                    return <ProjectLink key={route} projectId={id} projectName={projectName} route={route} info={info} description={description} available={available} />
                })}
        </div>
    </>
}

function ProjectLink({ projectId, projectName, route, info, description, available }) {
    return <>
        <Link className={`project-link-container project-${projectId} project-${available ? "available" : "unavailable"}`} to={route} style={{ backgroundColor: `var(--${projectId}-dark-color)` }}>
            <div className="project-headers">
                <img className="project-image" src={`/projectIcons/${projectId}.png`}></img>
                <div className="project-title-and-info" style={{color: `var(--${projectId}-light-color)`}}>
                    <h2 className="project-title">{projectName}</h2>
                    <p className="project-info">{info}</p>
                </div>
            </div>
            <p className={`project-description`}>{description}</p>
        </Link>
    </>
}

export default Projects;