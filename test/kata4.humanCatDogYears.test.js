const { humanCatDogYears } = require("../src");

describe("humanCatDogYears", () => {


it('returns an array', () => {
    const result = humanCatDogYears();
    expect(result.length).toEqual(3);
})
it('returns human years as first element of the array', ()=> {
    const humanYears = 1;
    const result = humanCatDogYears(humanYears);
    expect(result[0]).toEqual(1);
})
it('returns 15 cat years when human is 1', ()=> {
    const humanYears = 1;
    const result = humanCatDogYears(humanYears);
    expect(result[1]).toEqual(15);
})

it('returns 24 cat years when human is 2', ()=> {
    const humanYears = 2;
    const result = humanCatDogYears(humanYears);
    expect(result[1]).toEqual(24);
})

it('returns 28 cat years when human is 3', ()=> {
    const humanYears = 3;
    const result = humanCatDogYears(humanYears);
    expect(result[1]).toEqual(28);
})

it('returns 32 cat years when human is 4', ()=> {
    const humanYears = 4;
    const result = humanCatDogYears(humanYears);
    expect(result[1]).toEqual(32);
})

it('returns 15 dog years when human is 1', ()=> {
    const humanYears = 1;
    const result = humanCatDogYears(humanYears);
    expect(result[2]).toEqual(15);
})

it('returns 24 dog years when human is 2', ()=> {
    const humanYears = 2;
    const result = humanCatDogYears(humanYears);
    expect(result[2]).toEqual(24);
})

it('returns 29 dog years when human is 3', ()=> {
    const humanYears = 3;
    const result = humanCatDogYears(humanYears);
    expect(result[2]).toEqual(29);
})

it('returns 34 dog years when human is 4', ()=> {
    const humanYears = 4;
    const result = humanCatDogYears(humanYears);
    expect(result[2]).toEqual(34);
})
});
 