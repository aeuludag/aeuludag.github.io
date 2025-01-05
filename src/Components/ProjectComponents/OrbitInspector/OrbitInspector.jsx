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

    function orbitButtonClicked(e) {
        sendOrbit();
    }
    function sendOrbit(_atomNumber = atomNumber, _charge = charge) {
        // console.log(_atomNumber, _charge);
        if (_atomNumber === null) return;
        if (_charge === null) return;
        let arrangement = Chemist.calculateIonArrangement(_atomNumber, _charge);
        let layers = Chemist.getLayersFromArrangement(arrangement);
        setArrangement(arrangement);
        setLayers(layers);
    }

    function setAtomNumberAndCharge(atomNumber, charge) {
        setAtomNumber(atomNumber);
        setCharge(charge);
        // sendOrbit(atomNumber, charge);
    }

    function getSuperscriptedOrbits(arrangement) {
        let resultElements = [];
        let orbitString = Chemist.arrangementForSuperStringHTML(arrangement);
        for (let i = 0; i < orbitString.length; i++) {
            let orbit = orbitString[i];
            let orbitName = orbit[0][1]
            resultElements.push(<span className={`orbits-orbit-${orbitName}`} key={i}>{orbit[0]}<sup>{orbit[1]}</sup></span>);
        }
        return resultElements;
    }

    return (
        <div className="project-container orbit-container">
            <Helmet>
                <title>Orbit Inspector</title>
                <link rel="canonical" href="https://aeuludag.github.io/#/projects/orbit" />
            </Helmet>

            <Statusbar projectId={"orbit"} />

            <div className="project-content">
                <div className="orbit-top-section">
                    <div className="atom-info">
                        {atomNumber > 0 ? <>
                            <p className="atom-name">{elements[atomNumber - 1].name}</p>
                            <AtomPeriodicDisplay symbol={elements[atomNumber - 1].symbol} number={atomNumber} charge={charge} mass={elements[atomNumber - 1].atomic_mass} block={Chemist.getBlockName(atomNumber)} />
                        </>
                            : <>
                                <h2 className="atom-name">Hydrogen</h2>
                                <AtomPeriodicDisplay symbol={"H"} number={"1"} charge={""} mass={"1.01"} block={"s"} />
                            </>}

                    </div>
                    <AtomInput atomNumber={atomNumber} charge={charge} setter={setAtomNumberAndCharge} />
                </div>
                <button className="send-orbit-button" onClick={orbitButtonClicked}>Calculate Orbit</button>
                <div className="orbit-result">
                    <div><strong>Orbits: </strong><div className="orbitals">{getSuperscriptedOrbits(arrangement)}</div></div>
                    <div><strong>Layers: </strong> <LayerVisualiser layers={layers} /></div>
                </div>
                <hr></hr>
                <div className="about-orbit-inspector">
                    <h2>⚛️ About Orbit Inspector</h2>
                    <p>Hi! This is a project I made to test my knowledge on chemistry. This app is <em>supposed</em> to calculate a particles orbit based on its atom number and ion charge.</p>
                    <p>While working on this, I have realized how much exceptions chemistry and the real world have over our prettily defined rules.
                        The app is based on the things I've learnt at 11th grade. That's why I was fumbled to see most of my tests failing after correctly implementing
                        all the rules. Currently there are eighteen elements that I listed as "exceptions" and skipped during testing. May that be an excersise to the reader.
                    </p>
                    <p>
                        The UI is not pretty at all. This was way below my expectations and what could I do. Sadly I can't work more on it because of my limited time.
                        Feel free to give suggestions though. Thanks to all contributors of <a style={{ color: "white" }} href="https://github.com/Bowserinator/Periodic-Table-JSON">Periodic Table JSON</a>.
                        Their database helped me with testing.
                    </p>
                    <p>-limon, 04.01.25</p>
                </div>
            </div>
        </div>
    )
}

function AtomInput({ atomNumber, charge, setter }) {
    // Thanks to GPT for solving my mind boggling bug of not being able to empty the input boxes!
    function setAtomNumber(e) {
        const value = e.target.value;

        if (value === "") {
            setter(null, validateCharge(null, charge)); // Handle empty input by setting atomNumber to null
            return;
        }

        let parsedValue = parseInt(value, 10);
        parsedValue = Math.ceil(parsedValue);
        parsedValue = Math.max(1, parsedValue);
        parsedValue = Math.min(118, parsedValue);
        setter(parsedValue, validateCharge(parsedValue, charge));
    }

    function setCharge(e) {
        const value = e.target.value;

        if (value === "") {
            setter(atomNumber, null); // Handle empty input by setting charge to null
            return;
        }

        let parsedValue = parseInt(value, 10);
        parsedValue = Math.ceil(parsedValue);
        parsedValue = validateCharge(atomNumber, parsedValue);
        setter(atomNumber, parsedValue);
    }

    function validateCharge(newAtomNumber, newCharge) {
        if (newCharge < 0) return Math.max(newCharge, Chemist.getMaximumAnionCharge(newAtomNumber));
        if (newCharge > 0) return Math.min(newCharge, Chemist.getMaximumCationCharge(newAtomNumber));
        return 0;
    }

    return (
        <div className="atom-input">
            <div className="atom-input-number-wrapper">
                <label htmlFor="atom-input-number">Atom Number</label>
                <input type="number" id="atom-input-number" className="atom-input-number" max={118} min={1} size={3} value={atomNumber ?? ""} onChange={setAtomNumber} />
            </div>
            <div className="atom-input-charge-wrapper">
                <label htmlFor="atom-input-charge">Charge</label>
                <input type="number" id="atom-input-charge" className="atom-input-charge" max={118} min={-118} size={3} value={charge ?? ""} onChange={setCharge} />
            </div>
        </div>
    );
}


function AtomPeriodicDisplay({ symbol, number, charge, mass, block }) {
    return <div className={`atom-display block-${block}`}>
        <div className="atom-display-top-row">
            <p className="atom-display-mass">{Math.round(parseFloat(mass) * 100) / 100}</p>
            <p className="atom-display-charge" style={{ opacity: `${charge === 0 ? "0" : "1"}` }}>{charge > 0 ? "+" + charge : (charge === 0 ? "0" : charge)}</p>
        </div>
        <p className="atom-display-symbol">{symbol}</p>
        <div className="atom-display-bottom-row">
            <p className="atom-display-number">{number}</p>
            <p className="atom-display-electron">{number - charge}</p>
        </div>
    </div>

}

function LayerVisualiser({ layers }) {
    return <div className="layer-visualiser">
        <span>{layers.join(" ) ")}</span>
    </div>
}

export default OrbitInspector;