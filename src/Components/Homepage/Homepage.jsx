import projectsIcon from "../../assets/projects.png";
import designsIcon from "../../assets/designs.png";
import aboutIcon from "../../assets/about.png";
import { Link } from "react-router-dom";
import "./Homepage.css"
import { Helmet } from "react-helmet-async";
import Heart from "../../assets/heart.png";

function Homepage() {

    return (
        <div className="homepage">
            <Helmet>
                <title>Ahmet Emir's Cell</title>
                <link rel="canonical" href="https://aeuludag.github.io/#/" />
            </Helmet>
            <div className="homepage-header">
                <h1 className="homepage-title">
                    Ahmet Emir's Cell
                </h1>
            </div>
            <div className="homepage-buttons">
                <Link to="/projects" aria-label="Projects" style={{ textDecoration: "none" }}>
                    <div className="homepage-button homepage-button-projects">
                        <img alt="Projects" aria-label="Projects" src={projectsIcon} />
                        <p>Projects</p>
                    </div>
                </Link>
                <Link to="/gallery" aria-label="Designs" style={{ textDecoration: "none" }}>
                    <div className="homepage-button homepage-button-designs">
                        <img alt="Designs" aria-label="Designs" src={designsIcon} />
                        <p>Designs</p>
                    </div>
                </Link>
                <Link to="/about" aria-label="About Me" style={{ textDecoration: "none" }}>
                    <div className="homepage-button homepage-button-about">
                        <img alt="About Me" aria-label="About Me" src={aboutIcon} />
                        <p>About Me</p>
                    </div>
                </Link>
            </div>
            <div className="homepage-footer">
                <p> Made with
                    <img src={Heart} alt="Heart" />
                    by Ahmet Emir.
                </p>
            </div>

        </div>
    )
}



export default Homepage;