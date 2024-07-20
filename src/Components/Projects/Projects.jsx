import { Link, Route, Routes } from "react-router-dom";
import LogicCalculator from "../ProjectComponents/LogicCalculator/LogicCalculator"
import projects from "../../projects"
import "./Projects.css"
import { Helmet } from "react-helmet-async";
import OrbitInspector from "../ProjectComponents/OrbitInspector/OrbitInspector";

function Projects() {
    return <div className="projects">
        <Helmet>
            <title>Ahmet Emir's Projects</title>
            <link rel="canonical" href="https://aeuludag.github.io/#/projects" />
        </Helmet>
        <Routes>
            <Route path="" element={<ProjectLinks/>}/>
            <Route path="logic" element={<LogicCalculator />} />
            <Route path="orbit" element={<OrbitInspector />}  />
        </Routes>
    </div>
}

function ProjectLinks() {

    return <>
        <h1 className="route-title">Projects</h1>
        <p className="route-description">Here are some of the projects I've made so far.</p>
        <div className="project-links">
                {projects.map((project) => {
                    return <ProjectLink key={project.id} project={project} />
                })}
        </div>
    </>
}

function ProjectLink({ project }) {
    let { id, projectName, route, info, description, available } = project
    return <>
        <Link className={`project-link-container project-${id} project-${available ? "available" : "unavailable"}`} to={available ? route : "#"} style={{ backgroundColor: `var(--${id}-dark-color)` }}>
            <div className="project-headers">
                <img className="project-image" alt={"Project icon for " + projectName} src={`/projectIcons/${id}.png`}></img>
                <div className="project-title-and-info" style={{color: `var(--${id}-light-color)`}}>
                    <h2 className="project-title">{projectName}</h2>
                    <p className="project-info">{info}</p>
                </div>
            </div>
            <p className={`project-description`}>{description}</p>
        </Link>
    </>
}

export default Projects;