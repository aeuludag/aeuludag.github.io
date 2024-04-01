import "./Homepage.css"
import Sparkles from "../Sparkles/Sparkles";

function Homepage() {
    return (
        <>
            <h1 className="homepage-title">
                I'm Ahmet Emir and I love <br />
                <span className="magic-text">
                    <Sparkles className="homepage-sparkles" sparkleCount={3} sparkleClass="homepage-sparkle" />
                    programming
                </span>
                .
            </h1>
        </>
    )
}

export default Homepage;