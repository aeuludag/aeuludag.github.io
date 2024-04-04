import { Link } from "react-router-dom";
import projects from "../../projects"
import "./ProjectLinks.css"

function ProjectLinks() {

    // const projects = [
    //     { projectName: "Logic", route: "logic", description: "A tool to calculate boolean logic." },
    //     { projectName: "Unlogic", route: "unlogic", description: "A tool not to calculate boolean logic." },
    // ]

    return <>
        <div>
            <ul>
            {projects.map(({ projectName, route, description }) => {
                return <li key={route}>
                        <ProjectLink projectName={projectName} route={route} description={description}></ProjectLink>
                    </li>
            })}
            </ul>
        </div>
    </>
}

function ProjectLink(props) {
    return <div className="project-link-container">
        <Link className={`project-link link-to-${props.route}`} to={props.route}>
            <img className="project-image" src={`/projectIcons/${props.route}.png`}></img>
            {props.projectName}
        </Link>
        <p className={`project-description desc-to-${props.route}`}>{props.description}</p>
    </div>
}

export default ProjectLinks;