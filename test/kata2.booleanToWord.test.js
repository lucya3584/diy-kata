const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  it ("returns yes if booleanToWord is passed true", () => {
  expect(booleanToWord(true)).toBe("yes"); 
  });


  it ("returns no if booleanToWord is passed false", () => {
    expect(booleanToWord(false)).toBe("no");
  }); 

});


