const { reachDestination } = require("../src");

//distance/speed = hours to destination//
describe("reachDestination", () => {
  test("returns string with estimated time of arrival", () => {
    expect(reachDestination(44, 10)).toEqual(4.5)
    expect(reachDestination(44, 5)).toEqual(9)



  });
});
