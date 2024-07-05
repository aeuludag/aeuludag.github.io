import "./MagicButton.css"

function MagicButton(props) {
    return (<>
        <div className={"magic-button " + (props.className ? props.className : "")} data-delay={props.delay}>
            {props.text}
        </div>
    </>)
}

export default MagicButton;