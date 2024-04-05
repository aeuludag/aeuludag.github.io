import { Link } from "react-router-dom";
import projects from "../../projects"
import "./ProjectLinks.css"

function ProjectLinks() {

    return <>
        <h1 className="route-title">Projects</h1>
        <p className="route-description">Here are my web available projects.</p>
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