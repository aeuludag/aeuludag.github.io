import { Helmet } from "react-helmet-async";
import Statusbar from "../Statusbar/Statusbar";
import * as Chemist from "./Chemist";
import "./elements.js";
import "./OrbitInspector.css";
import { useState } from "react";
import { elements } from "./elements.js";

function OrbitInspector() {
    const [atomNumber, setAtomNumber] = useState(1);
    const [charge, setCharge] = useState(0);
    const [arrangement, setArrangement] = useState([]);
    const [layers, setLayers] = useState([]);

    function sendOrbit() {
        let arrangement = Chemist.calculateIonArrangement(atomNumber, charge);
        let layers = Chemist.getLayersFromArrangement(arrangement);
        setArrangement(arrangement);
        setLayers(layers);
    }

    function setAtomNumberAndCharge(atomNumber, charge) {
        setAtomNumber(atomNumber);
        setCharge(charge);
    }

    return (
        <div className="project-container orbit-container">
            <Helmet>
                <title>Orbit Inspector</title>
                <link rel="canonical" href="https://aeuludag.github.io/#/projects/orbit-inspector" />
            </Helmet>

            <Statusbar projectId={"orbit"} />

            <div className="project-content">
                <AtomInput atomNumber={atomNumber} charge={charge} setter={setAtomNumberAndCharge} />
                <button className="send-orbit-button" onClick={sendOrbit}>Calculate Orbit</button>
                <div className="orbit-result">
                    <div className="atom-info">
                        <AtomPeriodicDisplay symbol={elements[atomNumber - 1].symbol} number={atomNumber} charge={charge} />
                        <h2 className="atom-name">{elements[atomNumber - 1].name}</h2>
                    </div>
                    <p className="orbitals">{Chemist.arrangementToString(arrangement)}</p>
                    <LayerVisualiser layers={layers} />
                </div>
            </div>
        </div>
    )
}

function AtomInput({ atomNumber, charge, setter }) {
    function setAtomNumber(e) {
        let value = parseInt(e.target.value);
        value = Math.ceil(value);
        value = Math.max(1, value);
        value = Math.min(118, value);
        setter(value, validateCharge(value, charge));
    }

    function setCharge(e) {
        let value = parseInt(e.target.value);
        value = Math.ceil(value);
        console.log(atomNumber)
        value = validateCharge(atomNumber, value);
        setter(atomNumber, value);
    }

    function validateCharge(newAtomNumber, newCharge) {
        if(newCharge < 0) return Math.max(newCharge, Chemist.getMaximumAnionCharge(newAtomNumber));
        if(newCharge > 0) return Math.min(newCharge, Chemist.getMaximumCationCharge(newAtomNumber));
        return 0;
    }
    return (
        <div className="atom-input">
            <div className="atom-input-number-wrapper">
                <label htmlFor="atom-input-number">Atom Number</label>
                <input type="number" id="atom-input-number" className="atom-input-number" max={118} min={1} size={3} value={atomNumber} onChange={setAtomNumber} />
            </div>
            <div className="atom-input-charge-wrapper">
                <label htmlFor="atom-input-charge">Charge</label>
                <input type="number" id="atom-input-charge" className="atom-input-charge" max={118} min={-118} size={3} value={charge} onChange={setCharge} />
            </div>
        </div>
    )
}

function AtomPeriodicDisplay({ symbol, number, charge }) {
    return <div className="atom-display">
        <p className="atom-display-charge" style={{opacity: `${charge === 0 ? "0" : "1"}`}}>{charge > 0 ? "+" + charge : (charge === 0 ? "0" : charge)}</p>
        <p className="atom-display-symbol">{symbol}</p>
        <p className="atom-display-number">{number}</p>
    </div>

}

function LayerVisualiser({ layers }) {
    return <div className="layer-visualiser">
        <p>{layers.join(" ) ")}</p>
    </div>
}

export default OrbitInspector;