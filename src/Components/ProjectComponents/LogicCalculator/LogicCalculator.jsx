import { Link } from "react-router-dom";
import CloseImage from "../../../assets/close.svg"
import * as Logic from "./Logic"
import "./LogicCalculator.css";
import { useState } from "react";

function LogicCalculator() {
    const [output, setOutput] = useState(null)
    const [input, setInput] = useState("")
    const [hasErrorOccured, setHasErrorOccured] = useState(false)
    const [isSendActive, setIsSendActive] = useState(false)
    const [calculateTableMode, setCalculateTableMode] = useState(false)
    const [usePrefix, setUsePrefix] = useState(false)
    const [showTable, setShowTable] = useState(false)
    const [truthTableValues, setTruthTableValues] = useState([])

    let inputElement;

    function appendToInput(e) {
        let char = e.target.getAttribute("data-value");
        let newInput = addCharacterAtIndex(inputElement, char, e)
        setInput(newInput)
        // console.log({"new": newInput, "input": input})
        // onLogicInput();
        toDefault(newInput);
    }

    function deleteFromInput(e) {
        let newInput = deleteCharacterAtIndex(inputElement, e)
        setInput(newInput)
        // onLogicInput();
        toDefault(newInput);
    }

    function checkboxButtonLogic(e) {
        let button = e.target;
        let method = button.getAttribute("data-method") == 0;
        let setterMethod = method ? setCalculateTableMode : setUsePrefix;
        let value = button.getAttribute("data-value");
        button.setAttribute("data-value", 1 - value);
        // console.log("CheckBox Value", value)
        setterMethod(value == 0);
        Logic.setPrefixUnary(usePrefix);
        toDefault(input, method && (value == 0));
    }

    function onInputChange(e) {
        setInput(e.target.value);
        toDefault(e.target.value);
    }

    function sendLogic() {
        if (calculateTableMode) {
            setShowTable(true);
            setTruthTableValues(Logic.CalculateTruthTable(input));
            return;
        }

        let result = Logic.Calculate(input);
        setOutput(result)
        if (result == null) {
            setHasErrorOccured(true)
            return;
        }
    }

    function toDefault(newInput, newCalculateTableMode) {
        setOutput(null);
        setShowTable(false);
        setHasErrorOccured(false);
        if (newInput == null) newInput = input;
        if (newCalculateTableMode == null) newCalculateTableMode = calculateTableMode;
        let shouldBeActive = false;
        if (newCalculateTableMode) {
            shouldBeActive = Logic.getNonTokenCharacters(newInput).length > 0;
        } else {
            shouldBeActive = newInput.length > 0;
        }
        setIsSendActive(shouldBeActive);
    }
    function setVariable(name, value) {
        Logic.setVariable(name, value)
        toDefault();
    }

    Logic.setPrefixUnary(usePrefix);

    function onLogicInput() {
        return;
        let tempInput = inputElement.value;
        tempInput = tempInput.replaceAll("!", Logic.logicSymbols.notPostfix);
        tempInput = tempInput.replaceAll("&", Logic.logicSymbols.and);
        tempInput = tempInput.replaceAll("|", Logic.logicSymbols.or);
        tempInput = tempInput.replaceAll("^", Logic.logicSymbols.xor);
        tempInput = tempInput.replaceAll("=", Logic.logicSymbols.xnor);
        tempInput = tempInput.replaceAll(">", Logic.logicSymbols.ifthen);
        setInput(tempInput);
        inputElement.value = tempInput;
        console.log(tempInput)
    }

    return (
        <div className={`logic-container logic-${hasErrorOccured ? "error" : (output == null ? "default" : (output ? "true" : "false"))}`}>
            <div className="project-statusbar">
                <div className="statusbar-details">
                    <img className="statusbar-image" src="/projectIcons/logic.png" />
                    <h1 className="statusbar-title">Logic Calculator</h1>
                </div>
                <Link to="../" className="statusbar-close"><img src={CloseImage} /></Link>
            </div>
            <div className="project-content">
                <p className={`logic-output logic-output-calculate-mode-${calculateTableMode ? "table" : "value"}`}>
                    {(hasErrorOccured ? ("Check the input please.") :
                        (output == null ? "Press calculate (= button)" :
                            (output ? "☑ True, On, 1" : "☐ False, Off, 0")))}
                </p>
                <div className="logic-input-area">
                    <input type="text" className="logic-input" ref={(element) => { inputElement = element }} value={input} onChange={onInputChange} onInput={onLogicInput} />
                    <div className="logic-input-buttons">
                        <button className="logic-delete-button" onClick={deleteFromInput}>{"<"}</button>
                        <button type="submit" className="logic-send-button" disabled={!isSendActive} onClick={sendLogic}>{"="}</button>
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
                    <div className="logic-input-variables">
                        <button className="logic-input-button" data-value={"p"} onClick={appendToInput}>p</button>
                        <button className="logic-input-button" data-value={"q"} onClick={appendToInput}>q</button>
                        <button className="logic-input-button" data-value={"r"} onClick={appendToInput}>r</button>
                    </div>
                    <div className="logic-input-operators">
                        <button className="logic-input-button" onClick={appendToInput} data-value={usePrefix ? Logic.logicSymbols.notPrefix : Logic.logicSymbols.notPostfix}>{usePrefix ? Logic.logicSymbols.notPrefix : Logic.logicSymbols.notPostfix}</button>
                        <button className="logic-input-button" onClick={appendToInput} data-value={Logic.logicSymbols.and}>{Logic.logicSymbols.and}</button>
                        <button className="logic-input-button" onClick={appendToInput} data-value={Logic.logicSymbols.or}>{Logic.logicSymbols.or}</button>
                        <button className="logic-input-button" onClick={appendToInput} data-value={Logic.logicSymbols.xor}>{Logic.logicSymbols.xor}</button>
                        <button className="logic-input-button" onClick={appendToInput} data-value={Logic.logicSymbols.xnor}>{Logic.logicSymbols.xnor}</button>
                        <button className="logic-input-button" onClick={appendToInput} data-value={Logic.logicSymbols.ifthen}>{Logic.logicSymbols.ifthen}</button>
                    </div>
                    <div className="logic-options">
                        <button className="logic-input-button" onClick={checkboxButtonLogic} data-value={0} data-method={0} >{calculateTableMode ? "Truth Table" : "Truth Value"}</button>
                        <button className="logic-input-button" onClick={checkboxButtonLogic} data-value={0} data-method={1} >{(usePrefix ? "Prefix" : "Postfix") + " Not"}</button>
                    </div>
                </div>
                {!calculateTableMode && <Variables input={input} setVariable={setVariable} />}
                {calculateTableMode && <TruthTable input={input} showTable={showTable} truthTableValues={truthTableValues} />}
            </div>

        </div>)
}

function TruthTable({ input, showTable, truthTableValues }) {
    let nonTokenCharacters = Logic.getNonTokenCharacters(Logic.sanitize(input));
    let length = nonTokenCharacters.length;
    let topRow;
    let topRowElements = [];

    for (let i = 0; i < length; i++) {
        let char = nonTokenCharacters[i];
        topRowElements.push(<div key={i} className="logic-truth-table-item logic-truth-table-item-name">{char}</div>)
    }

    topRow = <div className="logic-truth-table-row">
        {topRowElements}
        <div className="logic-truth-table-item logic-truth-table-item-result logic-truth-table-item-result-name">Result</div>
    </div>

    return <div className="logic-truth-table">
        <h2>Truth Table</h2>
        {length == 0 && <p>At least one variable is needed to calculate table.</p>}
        {length > 0 && (showTable ?
            <>
                <div className="logic-truth-table-grid">
                    {topRow}
                    {truthTableValues.map((value, i) => {
                        return <TruthTableRow key={i} length={length} i={i} value={value} />
                    })}
                </div>
            </>
            :
            <p>Press calculate to calculate the table.</p>
        )}
    </div>
}

function TruthTableRow({ length, i, value }) {
    let items = [];

    for (let j = 0; j < length; j++) {
        items.push(<TruthTableItem key={j} value={Logic.isBitTrue(i, length - 1 - j)} isResult={false} />)
    }
    return <div className="logic-truth-table-row">
        {...items}
        <TruthTableItem value={value} isResult={true} />
    </div>
}

function TruthTableItem({ value, isResult }) {
    return <div className={`logic-truth-table-item logic-truth-table-item-${(value ? "true" : "false")} ${(isResult ? "logic-truth-table-item-result" : "")}`}>
        {Logic.boolToString(value)}
    </div>
}

function Variables({ input, setVariable }) {
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
                    return <Variable key={name} name={name} setVariable={setVariable} variableMap={variableMap} />
                })
            }
        </div>
    )
}

function Variable({ name, setVariable, variableMap }) {
    const [value, setValue] = useState(variableMap.get(name));

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
        <label htmlFor={name}>{value ? "☑" : "☐"} {name} {"(" + (value ? "True" : "False") + ")"}</label>
    </div>;
}

// Thanks, GPT-4o :3

function addCharacterAtIndex(input, character, event) {
    // Prevent the default action of the button click
    event.preventDefault();

    // Get the current value of the input
    let currentValue = input.value;

    // Get the selection start and end positions
    let start = input.selectionStart;
    let end = input.selectionEnd;

    // If no range is selected, ensure start equals end
    if (start === end) {
        // Insert the character at the cursor position
        let index = start;

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

        input.focus();
        input.setSelectionRange(index + 1, index + 1);

        return newValue;
    } else {
        // If a range is selected, replace the selected range with the character
        let newValue = currentValue.slice(0, start) + character + currentValue.slice(end);

        // Set the new value back to the input
        input.value = newValue;

        input.focus();
        input.setSelectionRange(start + 1, start + 1);

        return newValue;
    }
}


// Thanks again, GPT-4o :3
function deleteCharacterAtIndex(input, event) {
    // Prevent the default action of the button click
    event.preventDefault();

    // Get the current value of the input
    let currentValue = input.value;

    // Get the selection start and end positions
    let start = input.selectionStart;
    let end = input.selectionEnd;

    // If no range is selected, ensure start equals end
    if (start === end) {
        // If no selection, remove the character at the cursor position
        if (start < 1) {
            start = 1;
        } else if (start > currentValue.length) {
            start = currentValue.length;
        }

        // Remove the character before the cursor
        let newValue = currentValue.slice(0, start - 1) + currentValue.slice(start);

        // Set the new value back to the input
        input.value = newValue;

        // Maintain the focus on the input field
        input.focus();

        // Set the cursor position after the deleted character
        input.setSelectionRange(start - 1, start - 1);

        return newValue;
    } else {
        // If a range is selected, remove the selected range
        let newValue = currentValue.slice(0, start) + currentValue.slice(end);

        // Set the new value back to the input
        input.value = newValue;

        // Maintain the focus on the input field
        input.focus();

        // Set the cursor position to the start of the selection
        input.setSelectionRange(start, start);

        return newValue;
    }
}

export default LogicCalculator;