const { fizzBuzz } = require("../src");

describe("fizzBuzz", () => {
  it("returns Fizz when passed a multiple of 3", () => {
    expect(fizzBuzz(9)).toBe("Fizz")
    expect(fizzBuzz(3)).toBe("Fizz")
    expect(fizzBuzz(6)).toBe("Fizz")
  });

  it("returns Buzz when passed a multiple of 5", () => {
    expect(fizzBuzz(10)).toBe("Buzz")
    expect(fizzBuzz(50)).toBe("Buzz")
    expect(fizzBuzz(25)).toBe("Buzz")
  });
   

  it("returns FizzBuzz when passed a multiple 3 and 5", () => {

    expect(fizzBuzz(90)).toBe("FizzBuzz")
    expect(fizzBuzz(30)).toBe("FizzBuzz")
    expect(fizzBuzz(60)).toBe("FizzBuzz")
  });
    
  it("returns the number when it isn't a multiple of 3 or 5", () => {
    expect(8).toBe(8)
    expect(7).toBe(7)
    expect(17).toBe(17)

  });
});
