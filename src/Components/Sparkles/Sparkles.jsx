import { Sparkle } from "./Sparkle";

function Sparkles(props) {
    const sparkleCount = Number(props.sparkleCount);
    const sparkleClass = String(props.sparkleClass);
    let sparkleElements = []

    for (let i = 0; i < sparkleCount; i++) {
        sparkleElements.push(
            <Sparkle key={`${sparkleClass}-${i}`} className={`${sparkleClass} ${sparkleClass}-${i+1}`} />
        )
    }
    
    return(
        <>
            {sparkleElements}
        </>
    );
}

export default Sparkles;