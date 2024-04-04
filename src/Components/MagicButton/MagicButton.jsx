import MagicText from "../MagicText/MagicText";
import "./MagicButton.css"

function MagicButton(props) {
    return (<>
        <button className={"magic-button " + (props.className ? props.className : "")}>
            <div className="magic-button-bg">
                <MagicText>
                    {props.children}
                    {props.text}
                </MagicText>
            </div>
            {props.text}
        </button>
    </>)
}

export default MagicButton;