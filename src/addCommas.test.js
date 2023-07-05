const addCommas = require("./addCommas");

describe("#addCommas", () => {
  test("it is a function", () => {
    expect(typeof addCommas).toBe("function");
  });
  test('it should work with 1 digit numbers', () => {
    expect(addCommas(1)).toBe("1")
  })
  test('it should work with 2 digit numbers', () => {
    expect(addCommas(12)).toBe("12")
  })
  test('it should work with 3 digit numbers', () => {
    expect(addCommas(123)).toBe("123")
  })
  test('it should work with 4 digit numbers', () => {
    expect(addCommas(1234)).toBe("1,234")
  })
  test('it should work with 5 digit numbers', () => {
    expect(addCommas(12345)).toBe("12,345")
  })
  test('it should work with 6 digit numbers', () => {
    expect(addCommas(123456)).toBe("123,456")
  })
  test('it should work with 7 digit numbers', () => {
    expect(addCommas(1234567)).toBe("1,234,567")
  })
  test('it should work with 8 digit numbers', () => {
    expect(addCommas(12345678)).toBe("12,345,678")
  })
  test('it should work with 9 digit numbers', () => {
    expect(addCommas(123456789)).toBe("123,456,789")
  })
  test('it should work with decimals, short number', () =>{
    expect(addCommas(1234.567)).toBe("1,234.567")
  })
  test('it should work with decimals, long number', () =>{
    expect(addCommas(123456789.7654321)).toBe("123,456,789.7654321")
  })
});
