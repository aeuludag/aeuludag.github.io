import * as Chemist from "./Chemist.js";
import { elements } from "./elements.js";

let HArr, HeArr, LiArr, CrArr, CuArr, ZnArr, CeArr, OgArr;

// quick functions to shorten tests
function qAtomString(atomNumber) {
    return Chemist.arrangementToString(Chemist.calculateAtomArrangement(atomNumber));
}

function qIonString(atomNumber, charge) {
    return Chemist.arrangementToString(Chemist.calculateIonArrangement(atomNumber, charge));
}

beforeEach(() => {
    HArr = Chemist.calculateAtomArrangement(1);
    HeArr = Chemist.calculateAtomArrangement(2);
    LiArr = Chemist.calculateAtomArrangement(3);
    CrArr = Chemist.calculateAtomArrangement(24);
    CuArr = Chemist.calculateAtomArrangement(29);
    ZnArr = Chemist.calculateAtomArrangement(30);
    CeArr = Chemist.calculateAtomArrangement(55);
    OgArr = Chemist.calculateAtomArrangement(118);
});

test('Arrange electrons for atoms', () => { 
    let skips = [41, 42, 44, 45, 46, 47, 57, 58, 64, 78, 79, 89, 90, 91, 92, 93, 96, 103]
    for (let i = 0; i < 118; i++) {
        if(skips.includes(i + 1)) continue;
        const element = elements[i];
        console.log("Atom Number: " + ( i + 1 ))
        expect(qAtomString(i+1)).toEqual(element.electron_configuration);
    }
});

test('Calculate electrons in layers', () => { 
    expect(Chemist.getLayersFromArrangement(HArr)).toEqual([1]);
    expect(Chemist.getLayersFromArrangement(HeArr)).toEqual([2]);
    expect(Chemist.getLayersFromArrangement(LiArr)).toEqual([2, 1]);
    expect(Chemist.getLayersFromArrangement(CrArr)).toEqual([2, 8, 13, 1]);
    expect(Chemist.getLayersFromArrangement(CuArr)).toEqual([2, 8, 18, 1]);
    expect(Chemist.getLayersFromArrangement(ZnArr)).toEqual([2, 8, 18, 2]);
    expect(Chemist.getLayersFromArrangement(CeArr)).toEqual([2, 8, 18, 18, 8, 1]);
    expect(Chemist.getLayersFromArrangement(OgArr)).toEqual([2, 8, 18, 32, 32, 18, 8]);
});

test('Get valence electron count', () => { 
    expect(Chemist.getValenceElectronCount(HArr)).toEqual(1);
    expect(Chemist.getValenceElectronCount(HeArr)).toEqual(2);
    expect(Chemist.getValenceElectronCount(LiArr)).toEqual(1);
    expect(Chemist.getValenceElectronCount(CrArr)).toEqual(6);
    expect(Chemist.getValenceElectronCount(CuArr)).toEqual(11);
    expect(Chemist.getValenceElectronCount(ZnArr)).toEqual(12);
    expect(Chemist.getValenceElectronCount(CeArr)).toEqual(1);
    expect(Chemist.getValenceElectronCount(OgArr)).toEqual(8);
 })

test('Arrange electrons for ions', () => {
    expect(Chemist.calculateIonArrangement(1, 0)).toEqual(HArr);
    expect(Chemist.calculateIonArrangement(1, -1)).toEqual(HeArr);
    expect(Chemist.calculateIonArrangement(2, 0)).toEqual(HeArr);
    expect(Chemist.calculateIonArrangement(2, -28)).toEqual(ZnArr);
    expect(qIonString(24, -1)).toEqual("1s2 2s2 2p6 3s2 3p6 4s2 3d5");
    expect(qIonString(55, +1)).toEqual("1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6");
    expect(qIonString(54, +0)).toEqual("1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6");
    expect(qIonString(54, +4)).toEqual("1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p2");
    expect(qIonString(54, +7)).toEqual("1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s1 4d10");
    expect(qIonString(54, +9)).toEqual("1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 4d9");
    expect(qIonString(59, +0)).toEqual("1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f3");
    expect(Chemist.getMaximumCationCharge(59)).toEqual(2);
    expect(qIonString(59, +2)).toEqual("1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 4f3");
});

test('Total electron count', () => {
    expect(Chemist.getTotalElectronCount(HArr)).toEqual(1);
    expect(Chemist.getTotalElectronCount(HeArr)).toEqual(2);
    expect(Chemist.getTotalElectronCount(LiArr)).toEqual(3);
    expect(Chemist.getTotalElectronCount(CrArr)).toEqual(24);
    expect(Chemist.getTotalElectronCount(CuArr)).toEqual(29);
});