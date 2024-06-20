export let logicSymbols = {
  notPostfix: "'",
  notPrefix: "¬",
  and: "∧",
  or: "∨",
  xor: "⊻",
  xnor: "⇔",
  ifthen: "⇒",
};

export let logicOperators = [
  { symbol: logicSymbols.notPostfix, fn: not },
  { symbol: logicSymbols.notPrefix, fn: not },
  { symbol: logicSymbols.and, fn: and },
  { symbol: logicSymbols.or, fn: or },
  { symbol: logicSymbols.xor, fn: xor },
  { symbol: logicSymbols.xnor, fn: xnor },
  { symbol: logicSymbols.ifthen, fn: ifthen },
];

let prefixUnary = false;

export function setPrefixUnary(value) {
  prefixUnary = value;
}

/**
 * @type {Map<string, boolean>}
 */
export let variableMap = new Map();

function not(p) {
  return !p;
}
function and(p, q) {
  return p && q;
}
function or(p, q) {
  return p || q;
}
function xor(p, q) {
  return p != q;
}
function xnor(p, q) {
  return p == q;
}
function ifthen(p, q) {
  return !p || q;
}
export function isBitTrue(i, j) {
  return (i & (1 << j)) != 0;
}
/**
 *
 * @param {boolean} bool
 * @returns {string}
 */
export function boolToString(bool) {
  return bool ? "1" : "0";
}
/**
 *
 * @param {string} string
 * @returns {boolean}
 */
function stringToBool(string) {
  return string == "1" ? true : false;
}
/**
 *
 * @param {function} unaryFn
 * @param {string} symbol
 * @param {boolean} prefix
 * @returns {Array}
 */
function generateUnaryArray(unaryFn, prefix, prefixSymbol, postfixSymbol) {
  let finalArray = [];
  for (let i = 0; i < 2; i++) {
    let p = (i & 0b1) != 0;
    if (prefix) {
      finalArray.push({
        operation: `${prefixSymbol}${boolToString(p)}`,
        value: `${boolToString(unaryFn(p))}`,
      });
    } else {
      finalArray.push({
        operation: `${boolToString(p)}${postfixSymbol}`,
        value: `${boolToString(unaryFn(p))}`,
      });
    }
  }
  return finalArray;
}
/**
 *
 * @param {function} binaryFn
 * @param {string} symbol
 * @returns {Array}
 */
function generateBinaryArray(binaryFn, symbol) {
  let finalArray = [];
  for (let i = 0; i < 4; i++) {
    let p = (i & 0b01) != 0;
    let q = (i & 0b10) != 0;
    let operationAndValue = {
      operation: `${boolToString(p)}${symbol}${boolToString(q)}`,
      value: `${boolToString(binaryFn(p, q))}`,
    };
    finalArray.push(operationAndValue);
  }
  return finalArray;
}

/**
 * Generates the logic array. Logic array contains operation-value pairs. Later, operations get replaced with their values.
 * @param {string} input
 * @returns {Array}
 */
function generateLogicArrayFromInput(input) {
  let seenOperators = new Set();
  let logicArray = [
    { operation: "(1)", value: "1" },
    { operation: "(0)", value: "0" },
  ];

  logicArray.push(
    ...generateUnaryArray(
      logicOperators[0].fn,
      prefixUnary,
      logicSymbols.notPrefix,
      logicSymbols.notPostfix
    )
  );

  for (let i = 1; i < logicOperators.length; i++) {
    if (input.includes(logicOperators[i].symbol)) {
      seenOperators.add(logicOperators[i]);
    }
  }

  let seenOperatorsArray = Array.from(seenOperators);

  for (let i = 0; i < seenOperatorsArray.length; i++) {
    let operator = seenOperatorsArray[i];
    logicArray.push(...generateBinaryArray(operator.fn, operator.symbol));
  }

  return logicArray;
}

export function sanitize(input) {
  input = input.trim();
  input = input.replaceAll(" ", "");
  input = input.replaceAll("\t", "");
  input = input.replaceAll("[", "(");
  input = input.replaceAll("]", ")");
  return "(" + input + ")";
}

/**
 * Calculates logic from a given input. Sanitizes the input and generates the logic array.
 * @param {string} input
 * @returns {boolean?} Returns the calculated value, returns null if input is invalid.
 */
function calculatePureLogic(input) {
  input = sanitize(input);
  let logicArray = generateLogicArrayFromInput(input);

  return calculateFast(input, logicArray);
}

function calculateFast(input, logicArray) {
  let prevStep = "";
  let currentStep = input;

  do {
    prevStep = currentStep;
    currentStep = logicStep(prevStep, logicArray);
  } while (prevStep != currentStep);

  if (currentStep == "1" || currentStep == "0") {
    return stringToBool(currentStep);
  }

  return null;
}

/**
 *
 * @param {*} input
 * @param {[string, boolean][]} variables
 * @returns {string}
 */
function replaceVariables(input, variables) {
  for (let i = 0; i < variables.length; i++) {
    let variable = variables[i];
    input = input.replaceAll(variable[0], boolToString(variable[1]));
  }
  return input;
}

/**
 * Calculates logic with given variables.
 * @param {string} input
 * @param {[string, boolean][]} variables
 * @returns {boolean?}
 */
function calculateLogicWithVariables(input, variables) {
  input = replaceVariables(input, variables);
  return calculatePureLogic(input);
}

/**
 *
 * @param {*} input // string doesn't have replaceAll for some reason when it clearly SHOULD have???????????
 * @param {Array} logicArray
 * @returns {string}
 */
function logicStep(input, logicArray) {
  for (let i = 0; i < logicArray.length; i++) {
    input = input.replaceAll(logicArray[i].operation, logicArray[i].value);
  }
  return input;
}

/**
 *
 * @param {string} input
 * @returns {string[]}
 */
export function getNonTokenCharacters(input) {
  let characters = new Set();
  const tokenCharacters = [
    "0",
    "1",
    "(",
    ")",
    logicSymbols.notPostfix,
    logicSymbols.notPrefix,
    logicSymbols.and,
    logicSymbols.or,
    logicSymbols.xnor,
    logicSymbols.xor,
    logicSymbols.ifthen,
  ];
  for (let i = 0; i < input.length; i++) {
    let char = input[i];
    if (!tokenCharacters.includes(char)) {
      characters.add(char);
    }
  }

  return Array.from(characters);
}

/**
 * 
 * @param {string} name 
 * @param {boolean} value 
 */
export function setVariable(name, value) {
  variableMap.set(name, value);
}

export function Calculate(input) {
  // console.log("Prefix Unary", prefixUnary);
  input = sanitize(input);
  let variableNames = getNonTokenCharacters(input);
  input = replaceVariables(input, Array.from(variableMap))
  return calculatePureLogic(input);
}

/**
 * 
 * @param {string} input
 */
export function CalculateTruthTable(input) {
  let tableValues = [];
  input = sanitize(input);
  let variableNames = getNonTokenCharacters(input);
  let variables = [];

  for (let i = 0; i < variableNames.length; i++) {
    variables.push([variableNames[i], false]);
  }

  let logicArray = generateLogicArrayFromInput(input);

  for (let i = 0; i < Math.pow(2, variableNames.length); i++) {
    for (let j = 0; j < variables.length; j++) {
      variables[variables.length - 1 - j][1] = isBitTrue(i, j);
    }
    let replacedInput = replaceVariables(input, variables);
    // console.log(replacedInput, calculateFast(replacedInput, logicArray));
    tableValues.push(calculateFast(replacedInput, logicArray));
  }
  return tableValues;
}