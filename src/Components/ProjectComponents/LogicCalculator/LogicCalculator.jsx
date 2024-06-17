import { Link } from "react-router-dom";
import CloseImage from "../../../assets/close.svg"
import * as Logic from "./Logic"
import "./LogicCalculator.css";
import { useState } from "react";

function LogicCalculator() {
    const [output, setOutput] = useState(null)
    const [input, setInput] = useState("")
    const [hasErrorOccured, setHasErrorOccured] = useState(false)

    let rootStyle = getComputedStyle(document.querySelector(":root"));
    let inputElement;
    let logicContainer;

    function appendToInput(e) {
        let char = e.target.getAttribute("data-value");
        console.log(char)
        addCharacterAtIndex(inputElement, char, e)
        setInput(inputElement.value)
        toDefault();
    }

    function deleteFromInput(e) {
        deleteCharacterAtIndex(inputElement, e)
        setInput(inputElement.value)
        toDefault();
    }

    function onInputChange(e) {
        setInput(e.target.value);
        toDefault();
    }

    function sendLogic() {
        let result = Logic.Calculate(input);
        setOutput(result)
        if (result == null) {
            setHasErrorOccured(true)
            logicContainer.style.backgroundColor = rootStyle.getPropertyValue(`--logic-error-color`)
            return;
        }
        logicContainer.style.backgroundColor = getColorFromBoolean(result)
        // console.log(input)
    }

    function toDefault() {
        setOutput(null);
        setHasErrorOccured(false);
        logicContainer.style.backgroundColor = rootStyle.getPropertyValue(`--logic-default-color`)
        }
    function setVariable(name, value) {
        Logic.setVariable(name, value)
        toDefault();
    }

    function getColorFromBoolean(value) { 
        if(value == null) return rootStyle.getPropertyValue(`--logic-default-color`);
        return rootStyle.getPropertyValue(`--logic-${(value ? "true" : "false")}-color`)
    }

    return (
        <div className="logic-container" ref={(element) => { logicContainer = element }}>
            <div className="project-statusbar">
                <div className="statusbar-details">
                    <img className="statusbar-image" src="/projectIcons/logic.png" />
                    <h1 className="statusbar-title">Logic Calculator</h1>
                </div>
                <Link to="../" className="statusbar-close"><img src={CloseImage} /></Link>
            </div>
            <div className="project-content">
                <p className="logic-output">
                    {hasErrorOccured ? "Check the input please." :
                        (output == null ? "Press calculate (= button)" :
                            (output ? "☑ True, On, 1" : "☐ False, Off, 0"))}
                </p>
                <div className="logic-input-area">
                    <input type="text" className="logic-input" ref={(element) => { inputElement = element }} value={input} onChange={onInputChange} />
                    <div className="logic-input-buttons">
                        <button className="logic-delete-button" onClick={deleteFromInput}>{"<"}</button>
                        <button type="submit" className="logic-send-button" onClick={sendLogic}>{"="}</button>
                    </div>
                </div>
                <div className="logic-input-categories">
                    <div className="logic-input-numbers">
                        <button className="logic-input-button" data-value={"1"} onClick={appendToInput}>1</button>
                        <button className="logic-input-button" data-value={"0"} onClick={appendToInput}>0</button>
                    </div>
                    <div className="logic-input-paranthesis">
                        <button className="logic-input-button" data-value={"("} onClick={appendToInput}>{"("}</button>
                        <button className="logic-input-button" data-value={")"} onClick={appendToInput}>{")"}</button>
                    </div>
                    <div className="logic-input-operators">
                        <button className="logic-input-button" onClick={appendToInput} data-value={Logic.logicSymbols.not}>{Logic.logicSymbols.not}</button>
                        <button className="logic-input-button" onClick={appendToInput} data-value={Logic.logicSymbols.and}>{Logic.logicSymbols.and}</button>
                        <button className="logic-input-button" onClick={appendToInput} data-value={Logic.logicSymbols.or}>{Logic.logicSymbols.or}</button>
                        <button className="logic-input-button" onClick={appendToInput} data-value={Logic.logicSymbols.xor}>{Logic.logicSymbols.xor}</button>
                        <button className="logic-input-button" onClick={appendToInput} data-value={Logic.logicSymbols.xnor}>{Logic.logicSymbols.xnor}</button>
                        <button className="logic-input-button" onClick={appendToInput} data-value={Logic.logicSymbols.ifthen}>{Logic.logicSymbols.ifthen}</button>
                    </div>
                    <div className="logic-input-variables">
                        <button className="logic-input-button" data-value={"p"} onClick={appendToInput}>p</button>
                        <button className="logic-input-button" data-value={"q"} onClick={appendToInput}>q</button>
                        <button className="logic-input-button" data-value={"r"} onClick={appendToInput}>r</button>
                    </div>
                </div>
                <Variables input={input} setVariable={setVariable} colorFunction={getColorFromBoolean} />
            </div>

        </div>)
}

function Variables({ input, setVariable, colorFunction }) {
    let variableMap = Logic.variableMap;
    let nonTokenCharacters = Logic.getNonTokenCharacters(Logic.sanitize(input));

    nonTokenCharacters.forEach((character) => {
        if (!variableMap.has(character)) Logic.setVariable(character, false);
    })

    return (
        <div className="variables">
            <h2>Variables</h2>
            {nonTokenCharacters.length == 0 && <p>Type p, q, r or any other letter as a variable.</p>}
            {
                nonTokenCharacters.map((name) => {
                    return <Variable key={name} name={name} setVariable={setVariable} colorFunction={colorFunction} variableMap={variableMap} />
                })
            }
        </div>
    )
}

function Variable({ name, setVariable, colorFunction, variableMap }) {
    const [value, setValue] = useState(variableMap.get(name))
    let label;

    return <div key={name} className={`variable variable-${(value ? "true" : "false")}`}>
        <input
            type="checkbox"
            id={name}
            checked={value}
            onChange={(e) => {
                setVariable(name, e.target.checked);
                setValue(e.target.checked);
            }}
        />
        <label style={{backgroundColor: colorFunction(value)}} htmlFor={name}>{value ? "☑" : "☐"} {name} {"(" + (value ? "True" : "False") + ")"}</label>
    </div>;
}

// Thanks, GPT-4o :3

function addCharacterAtIndex(input, character, event) {
    // Prevent the default action of the button click
    event.preventDefault();

    // Get the current value of the input
    let currentValue = input.value;

    // Get the current cursor position, defaulting to the end if no selection
    let index = input.selectionStart ?? currentValue.length;

    // Ensure the index is within the valid range
    if (index < 0) {
        index = 0;
    } else if (index > currentValue.length) {
        index = currentValue.length;
    }

    // Insert the character at the specified index
    let newValue = currentValue.slice(0, index) + character + currentValue.slice(index);

    // Set the new value back to the input
    input.value = newValue;

    // Maintain the focus on the input field
    input.focus();

    // Set the cursor position after the inserted character
    input.setSelectionRange(index + 1, index + 1);
}

// Thanks again, GPT-4o :3
function deleteCharacterAtIndex(input, event) {
    // Prevent the default action of the button click
    event.preventDefault();

    // Get the current value of the input
    let currentValue = input.value;

    // Get the current cursor position
    let index = input.selectionStart ?? currentValue.length;

    // Ensure the index is within the valid range
    if (index < 1) {
        index = 1;
    } else if (index > currentValue.length) {
        index = currentValue.length;
    }

    // Remove the character at the specified index
    let newValue = currentValue.slice(0, index - 1) + currentValue.slice(index);

    // Set the new value back to the input
    input.value = newValue;

    // Maintain the focus on the input field
    input.focus();

    // Set the cursor position after the deleted character
    input.setSelectionRange(index - 1, index - 1);
}

export default LogicCalculator;