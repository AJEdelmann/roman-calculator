import { validateNumber, toRoman, toNumber } from "../utils/convert";

// Validator: it returns undefined if the numbers passes it
test('Should return "Invalid Roman numeral". In this case, CCCC (400)', () => {
  expect(validateNumber("CCCC")).toBe("Invalid Roman numeral");
});

test('Should return "Invalid Roman numeral". In this case, LL ("not a Roman number")', () => {
  expect(validateNumber("LL")).toBe("Invalid Roman numeral");
});

test('Should return "Invalid Roman numeral". In this case, CXD ("not a Roman number")', () => {
  expect(validateNumber("CXD")).toBe("Invalid Roman numeral");
});

test("Should return undefined (valid number). In this case, CLXVI (166)", () => {
  expect(validateNumber("CLXVI")).toBeUndefined();
});

test("Should return undefined (valid number). In this case, MCCXXXIV (1234)", () => {
  expect(validateNumber("MCCXXXIV")).toBeUndefined();
});

test("Should return undefined (valid number). In this case, MMMCMXCIX (3999)", () => {
  expect(validateNumber("MMMCMXCIX")).toBeUndefined();
});

// Operations

// Valid Operations
const num1 = "XVII"; // 17
const num2 = "III"; // 3
const add1 = toRoman(toNumber(num1) + toNumber(num2)); // 17 + 3
const add3 = toRoman(toNumber(num1) + toNumber(num2) + toNumber(num2)); // 17 + 3 + 3
const sub1 = toRoman(toNumber(num1) - toNumber(num2)); // 17 - 3
const mul1 = toRoman(toNumber(num1) * toNumber(num2)); // 17 * 3
const severalOperations = toRoman(
  toNumber(num1) * toNumber(num2) + toNumber(num1) - toNumber(num2)
); // (17 * 3) + (17) - (3) = 65

test("Should return XX (17+3 = 20)", () => {
  expect(add1).toBe("XX");
});

test("Should return XXIII (17+3+3 = 23)", () => {
  expect(add3).toBe("XXIII");
});

test("Should return XIV (17-3 = 14)", () => {
  expect(sub1).toBe("XIV");
});

test("Should return LI (17*3 = 51)", () => {
  expect(mul1).toBe("LI");
});

test("Should return LI ((17 * 3) + (17) - (3) = 65)", () => {
  expect(severalOperations).toBe("LXV");
});

// //Invalid Operations
const num3 = "XI"; // 11
const num4 = "XXI"; // 21
const num5 = "CC"; // 200
const num6 = "MMMDCCCVII"; // 3807
const add2 = toRoman(toNumber(num6) + toNumber(num5)); // 3807 + 200
const sub2 = toRoman(toNumber(num3) - toNumber(num4)); // 11 - 21
const mul2 = toRoman(toNumber(num4) * toNumber(num5)); // 21 * 200
const severalOperations2 = toRoman(
  toNumber(num4) * toNumber(num5) + toNumber(num3) - toNumber(num4)
); // (21 * 200) + (11) - (21) = 4190

test('Should return "Error" -  number exceed limit (3807+200= 4007)', () => {
  expect(add2).toBe("Error");
});

test('Should return "Error" -  not accept negative number (11-21= -10)', () => {
  expect(sub2).toBe("Error");
});

test('Should return "Error" -  number exceed limit (21 * 200= 4200)', () => {
  expect(mul2).toBe("Error");
});

test('Should return "Error" -  number exceed limit ((21 * 200) + (11) - (21) = 4190)', () => {
  expect(severalOperations2).toBe("Error");
});
