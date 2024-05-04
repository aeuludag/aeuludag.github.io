import { Link } from "react-router-dom";
import CloseImage from "../../../assets/close.svg"
import * as Logic from "./Logic"
import "./LogicCalculator.css";
import { useState } from "react";

function LogicCalculator() {
    const [output, setOutput] = useState(null)
    const [input, setInput] = useState("")

    /**
     * 
     * @param {React.MouseEvent} e 
     */
    function appendToInput(e) {
        let char = e.target.getAttribute("data-value");
        setInput(input + char)
    }
    return (
        <div className="logic-container">
            <div className="project-statusbar">
                <div className="statusbar-details">
                    <img className="statusbar-image" src="/projectIcons/logic.png" />
                    <h1 className="statusbar-title">Logic Calculator</h1>
                </div>
                <Link to="../" className="statusbar-close"><img src={CloseImage} /></Link>
            </div>
            <div className="project-content">
                <input type="text" value={input} onChange={(e) => { setInput(e.target.value); }} />
                <button type="submit" className="logic-send-button" onClick={() => { setOutput(Logic.Calculate(input)) }}>Calculate</button>
                <div className="logic-input-buttons">
                    <button data-value={"("} onClick={appendToInput}>{"("}</button>
                    <button data-value={")"} onClick={appendToInput}>{")"}</button>
                    <button data-value={"1"} onClick={appendToInput}>1</button>
                    <button data-value={"0"} onClick={appendToInput}>0</button>
                    <button data-value={Logic.logicSymbols.not} onClick={appendToInput}>NOT</button>
                    <button data-value={Logic.logicSymbols.and} onClick={appendToInput}>AND</button>
                    <button data-value={Logic.logicSymbols.or} onClick={appendToInput}>OR</button>
                    <button data-value={Logic.logicSymbols.xor} onClick={appendToInput}>XOR</button>
                    <button data-value={Logic.logicSymbols.xnor} onClick={appendToInput}>XNOR</button>
                </div>
                <p className="logic-output">
                    {output == null ? "Press calculate to... calculate" : Logic.boolToString(output)}
                </p>
            </div>

        </div>)
}

export default LogicCalculator;