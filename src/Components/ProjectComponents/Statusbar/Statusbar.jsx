import { Link } from "react-router-dom";
import CloseImage from "../../../assets/close.svg"
import GitHub from "../../../assets/github.svg";
import projects from "../../../projects";
import "./Statusbar.css";

function Statusbar({ projectId }) {
    let project = projects.filter((project) => project.id === projectId)[0];

    return (
        <div className="statusbar">
            <div className="statusbar-details">
                <img className="statusbar-image" src={`/ProjectIcons/${projectId}.png`} alt={`${project.projectName} icon}`} />
                <h1 className="statusbar-title">{project.projectName}</h1>
            </div>
            <div className="statusbar-links">
                {project.sourceCode && <Link to={project.sourceCode} className="statusbar-source" aria-label="Source"><img src={GitHub} alt="GitHub" /></Link>}
                <Link to="../" className="statusbar-close" aria-label="Close"><img src={CloseImage} alt="Close" /></Link>
            </div>
        </div>
    )
}

export default Statusbar;