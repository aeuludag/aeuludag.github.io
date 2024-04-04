import "./MagicText.css"

function MagicText(props) {
    return (
        <span className="magic-text">
            {/* {props.text} */}
            {props.children}
        </span>
    )
}

export default MagicText;