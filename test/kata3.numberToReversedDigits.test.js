const { numberToReversedDigits } = require("../src");

describe("numberToReversedDigits", () => {
  test("returns a reversed array of the number's digits", () => {
    expect(numberToReversedDigits(["1 , 2 , 3 , 4 , 5"])).toEqual(["5 , 4 , 3 , 2 , 1"])
    expect(numberToReversedDigits(["3 , 6 , 9 , 12"])).toEqual(["21 , 9 , 6 , 3"])
    expect(numberToReversedDigits(["2 , 4 , 6 , 8"])). toEqual(["8 , 6 , 4 , 2"])


  });
});
