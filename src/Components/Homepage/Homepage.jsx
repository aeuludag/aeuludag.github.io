import "./Homepage.css"
import Sparkles from "../Sparkles/Sparkles";
import MagicButton from "../MagicButton/MagicButton";
import MagicText from "../MagicText/MagicText"
import { Link } from "react-router-dom";

function Homepage() {
    return (
        <>
            <h1 className="homepage-title">
                I'm Ahmet Emir and I love <br />
                <MagicText>
                    <Sparkles sparkleCount={3} sparkleClass="magic-text-sparkle" />
                    programming
                </MagicText>
                .
            </h1>
            <div className="homepage-magic-buttons">
                <Link to="/projects" style={{textDecoration: "none"}}>
                    <MagicButton text="Projects" className="homepage-magic-button projects-button" />
                </Link>
                <Link to="/gallery" style={{textDecoration: "none"}}>
                    <MagicButton text="Designs" className="homepage-magic-button projects-button" />
                </Link>
            </div>
        </>
    )
}

export default Homepage;