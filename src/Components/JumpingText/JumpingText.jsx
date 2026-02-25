import React from "react";
import "../JumpingText/JumpingText.css"

function JumpingText({className, text}) {
    console.log(text)
    var elements = []
    for (let i = 0; i < text.length; i++) {
        console.log("Render at " + i)
        const element = <span key={"jumping-text-letter-" + i} className="jumping-text-letter" style={{
            animationDelay: `${-i * 0.1}s`
        }}>{text[i]}</span>;
        elements.push(element)
    }

    return (<>
        <span className={`jumping-text ${className}`}>
            {elements}
        </span>
    </>)
}

export default JumpingText;