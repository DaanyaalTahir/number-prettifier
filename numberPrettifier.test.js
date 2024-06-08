const prettifyNumber = require("./numberPrettifier");

// TC1: Small integer
test('TC1: Small integer 532 should return "532"', () => {
  expect(prettifyNumber(532)).toBe("532");
});

// TC2: Integer just above 1M
test('TC2: Integer 2000000 should return "2M"', () => {
  expect(prettifyNumber(2000000)).toBe("2M");
});

// TC3: Floating-point number above 1M
test('TC3: Floating-point number 2500000 should return "2.5M"', () => {
  expect(prettifyNumber(2500000)).toBe("2.5M");
});

// TC4: Integer just at 1B
test('TC4: Integer 1000000000 should return "1B"', () => {
  expect(prettifyNumber(1000000000)).toBe("1B");
});

// TC5: Floating-point number above 1B
test('TC5: Floating-point number 1123456789 should return "1.1B"', () => {
  expect(prettifyNumber(1123456789)).toBe("1.1B");
});

// TC6: Integer just at 1T
test('TC6: Integer 1000000000000 should return "1T"', () => {
  expect(prettifyNumber(1000000000000)).toBe("1T");
});

// TC7: Floating-point number above 1T
test('TC7: Floating-point number 1234567890123 should return "1.2T"', () => {
  expect(prettifyNumber(1234567890123)).toBe("1.2T");
});
