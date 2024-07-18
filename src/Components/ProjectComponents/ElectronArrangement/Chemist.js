// 1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d10 7p6;

const OrbitLayerElectrons = [
  { orbit: 0, layer: 1, electron: 2 }, // 1s2
  { orbit: 0, layer: 2, electron: 2 }, // 2s2
  { orbit: 1, layer: 2, electron: 6 }, // 2p6
  { orbit: 0, layer: 3, electron: 2 }, // 3s2
  { orbit: 1, layer: 3, electron: 6 }, // 3p6
  { orbit: 0, layer: 4, electron: 2 }, // 4s2
  { orbit: 2, layer: 3, electron: 10 }, // 3d10
  { orbit: 1, layer: 4, electron: 6 }, // 4p6
  { orbit: 0, layer: 5, electron: 2 }, // 5s2
  { orbit: 2, layer: 4, electron: 10 }, // 4d10
  { orbit: 1, layer: 5, electron: 6 }, // 5p6
  { orbit: 0, layer: 6, electron: 2 }, // 6s2
  { orbit: 3, layer: 4, electron: 14 }, // 4f14
  { orbit: 2, layer: 5, electron: 10 }, // 5d10
  { orbit: 1, layer: 6, electron: 6 }, // 6p6
  { orbit: 0, layer: 7, electron: 2 }, // 7s2
  { orbit: 3, layer: 5, electron: 14 }, // 5f14
  { orbit: 2, layer: 6, electron: 10 }, // 6d10
  { orbit: 1, layer: 7, electron: 6 }, // 7p6
];

const orbitString = [
    "s", "p", "d", "f"
];

const predefinedElectronArrangements = {
    24: [
        { orbit: 0, layer: 1, electron: 2 }, // 1s2
        { orbit: 0, layer: 2, electron: 2 }, // 2s2
        { orbit: 1, layer: 2, electron: 6 }, // 2p6
        { orbit: 0, layer: 3, electron: 2 }, // 3s2
        { orbit: 1, layer: 3, electron: 6 }, // 3p6
        { orbit: 0, layer: 4, electron: 1 }, // 4s1
        { orbit: 2, layer: 3, electron: 5 }, // 3d5
    ],
    29: [
        { orbit: 0, layer: 1, electron: 2 }, // 1s2
        { orbit: 0, layer: 2, electron: 2 }, // 2s2
        { orbit: 1, layer: 2, electron: 6 }, // 2p6
        { orbit: 0, layer: 3, electron: 2 }, // 3s2
        { orbit: 1, layer: 3, electron: 6 }, // 3p6
        { orbit: 0, layer: 4, electron: 1 }, // 4s1
        { orbit: 2, layer: 3, electron: 10 }, // 3d10
    ]
}

function calculateAtomArrangement(atomNumber) {
    if(predefinedElectronArrangements[atomNumber]) {
        return predefinedElectronArrangements[atomNumber];
    }

    let electronCount = atomNumber;
    let arrangement = [];

    for(let i = 0; i < OrbitLayerElectrons.length; i++) {
        const { orbit, layer, electron } = OrbitLayerElectrons[i];
        if(electronCount >= electron) {
            electronCount -= electron;
            arrangement.push(OrbitLayerElectrons[i]);
            if(electronCount === 0) break;
        } else {
            arrangement.push({ orbit: orbit, layer: layer, electron: electronCount });
            break;
        }
    }

    return arrangement;
}

function calculateIonArrangement(atomNumber, charge) {
    if(charge <= 0) return calculateAtomArrangement(atomNumber - charge);
    if(atomNumber <= 18) return calculateAtomArrangement(atomNumber - charge);
    if(getMaximumCationCharge(atomNumber) < charge) throw new Error("Not enough electrons to ionize.");

    let initialArrangement = calculateAtomArrangement(atomNumber);

    let biggestSOrbitIndex = 0;
    for(let i = initialArrangement.length - 1; i >= 0; i--) {
        if(initialArrangement[i].orbit === 0) {
            biggestSOrbitIndex = i;
            break;
        }
    }

    // seenOrbits = 0th element = index of last s, 1st element = index of last p, 2nd element = index of last d
    let seenOrbits = [-1, -1, -1];
    for(let i = biggestSOrbitIndex; i < initialArrangement.length; i++) {
        const { orbit, layer, electron } = initialArrangement[i];
        seenOrbits[orbit] = i;
    }

    const sIndex = seenOrbits[0];
    const pIndex = seenOrbits[1];
    const dIndex = seenOrbits[2];

    // p -> s -> d

    // if there is p
    if(seenOrbits[1] >= 0) {
        const { orbit, layer, electron } = initialArrangement[pIndex];
        if (electron > charge) {
            initialArrangement[pIndex] = { orbit: orbit, layer: layer, electron: electron - charge };
            return initialArrangement;
        } else if (electron === charge) {
            initialArrangement.splice(pIndex, 1);
            return initialArrangement;
        }
        charge -= electron;
    }

    // there definietly is s but I used an if here for scoping stuff
    if(seenOrbits[0] >= 0) {
        const { orbit, layer, electron } = initialArrangement[sIndex];
        if (electron > charge) {
            initialArrangement[sIndex] = { orbit: orbit, layer: layer, electron: electron - charge };
            initialArrangement.splice(pIndex, 1);
            return initialArrangement;
        } else if (electron === charge) {
            initialArrangement.splice(pIndex, 1);
            initialArrangement.splice(sIndex, 1);
            return initialArrangement;
        }
        charge -= electron;
    }

    // by definition (look at the thrown error above) the remaining should be d, if there exists
    if(dIndex < 0) throw new Error("THIS DOESNT MAKE ANY SENSE");
    const { orbit, layer, electron } = initialArrangement[dIndex];
    if (electron > charge) {
        initialArrangement[dIndex] = { orbit: orbit, layer: layer, electron: electron - charge };
        initialArrangement.splice(pIndex, 1);
        initialArrangement.splice(sIndex, 1);
        return initialArrangement;
    } else if (electron === charge) {
        initialArrangement.splice(dIndex, 1);
        initialArrangement.splice(pIndex, 1);
        initialArrangement.splice(sIndex, 1);
        return initialArrangement;
    }
}

function getValenceElectronCount(electronArrangement) {
    let valence = 0;
    let lastEnergyLevel = electronArrangement[electronArrangement.length - 1];

    valence += lastEnergyLevel.electron;
    if(lastEnergyLevel.orbit === 0) {
        return valence;
    }

    for(let i = electronArrangement.length - 1; i >= 1; i--) {
        if(electronArrangement[i].orbit === 0) {
            valence += electronArrangement[i].electron;
            break;
        }
    }

    return valence;
}

function getLayersFromArrangement(electronArrangement) {
    let layers = [];

    for (let i = 0; i < electronArrangement.length; i++) {
        const { orbit, layer, electron } = electronArrangement[i];

        if (!layers[layer - 1]) {
          layers.push(electron);
        } else {
          layers[layer - 1] += electron;
        }
    }

    return layers;
}

function electronArrangementToString(electronArrangement) {
    let arrangementStrings = [];
    for(let i = 0; i < electronArrangement.length; i++) {
        arrangementStrings.push(`${electronArrangement[i].layer}${orbitString[electronArrangement[i].orbit]}${electronArrangement[i].electron}`);
    }
    return arrangementStrings.join(" ");
}

function getMaximumCationCharge(atomNumber) {
    let initialArrangement = calculateAtomArrangement(atomNumber);
    let cation = 0;

    for(let i = initialArrangement.length - 1; i >= 0; i--) {
        const { orbit, layer, electron } = initialArrangement[i];
        cation += electron;
        if(initialArrangement[i].orbit === 0) {
            break;
        }
    }

    return cation;
}

export { calculateAtomArrangement, electronArrangementToString, getLayersFromArrangement, calculateIonArrangement, getValenceElectronCount }