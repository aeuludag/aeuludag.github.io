import * as Chemist from "./Chemist.js";

let HArr, HeArr, LiArr, CrArr, CuArr, ZnArr, CeArr, OgArr;

// quick functions to shorten tests
function qAtomString(atomNumber) {
    return Chemist.electronArrangementToString(Chemist.calculateAtomArrangement(atomNumber));
}

function qIonString(atomNumber, charge) {
    return Chemist.electronArrangementToString(Chemist.calculateIonArrangement(atomNumber, charge));
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
    expect(qAtomString(1)).toEqual("1s1");
    expect(qAtomString(2)).toEqual("1s2");
    expect(qAtomString(3)).toEqual("1s2 2s1");
    expect(qAtomString(24)).toEqual("1s2 2s2 2p6 3s2 3p6 4s1 3d5");
    expect(qAtomString(29)).toEqual("1s2 2s2 2p6 3s2 3p6 4s1 3d10");
    expect(qAtomString(30)).toEqual("1s2 2s2 2p6 3s2 3p6 4s2 3d10");
    expect(qAtomString(55)).toEqual("1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s1");
    expect(qAtomString(118)).toEqual("1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d10 7p6");
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
});
