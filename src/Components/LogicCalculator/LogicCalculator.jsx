import { Link } from "react-router-dom";
import CloseImage from "../../assets/close.svg"
import "./LogicCalculator.css";

function LogicCalculator() {
    return (
        <div className="logic-container">
            <div className="project-statusbar">
                <div className="statusbar-details">
                    <img className="statusbar-image" src="/projectIcons/logic.png" />
                    <h1 className="statusbar-title">Logic Calculator</h1>
                </div>
                <Link to="../" className="statusbar-close"><img src={CloseImage} /></Link>
            </div>

        </div>)
}

export default LogicCalculator;