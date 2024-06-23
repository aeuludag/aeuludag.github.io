import { useState, useEffect } from "react";
import Sparkles from "../Sparkles/Sparkles";
import MagicButton from "../MagicButton/MagicButton";
import MagicText from "../MagicText/MagicText"
import { Link } from "react-router-dom";
import "./Homepage.css"

function Homepage() {
    const [magicTextIndex, setMagicTextIndex] = useState(0);
    const magicTexts = ["programming", "designing", "maths", "art", "poetry"];

    useEffect(() => {
        const intervalId = setInterval(() => {
            setMagicTextIndex((prevIndex) => (prevIndex + 1) % magicTexts.length);
        }, 5000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="homepage">
            <h1 className="homepage-title">
                I'm Ahmet Emir <br /> and I love <br />
                <MagicText>
                    <Sparkles sparkleCount={3} sparkleClass="magic-text-sparkle" />
                    {magicTexts[magicTextIndex]}
                </MagicText>
            </h1>
            <div className="homepage-magic-buttons">
                <Link to="/projects" style={{ textDecoration: "none" }}>
                    <MagicButton text="Projects" className="homepage-magic-button projects-button" />
                </Link>
                <Link to="/gallery" style={{ textDecoration: "none" }}>
                    <MagicButton text="Designs" className="homepage-magic-button designs-button" />
                </Link>
            </div>
        </div>
    )
}

export default Homepage;