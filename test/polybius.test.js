// Write your tests here!
const expect = require("chai").expect;
const { polybius } = require("../src/polybius");
describe("polybius", () => {
  it("Should translate the letter 'i' to 42", () => {
    let input = "i";
    let encode = true;
    const expected = "42";
    const actual = polybius(input, encode);
    expect(actual).to.equal(expected);
  });
  it("Should translate the letter 'j' to 42", () => {
    let input = "j";
    let encode = true;
    const expected = "42";
    const actual = polybius(input, encode);
    expect(actual).to.equal(expected);
  });
  it("Should translate the number 42 to 'i/j' when decoding", () => {
    let input = "42";
    let encode = false;
    const expected = "i/j";
    const actual = polybius(input, encode);
    expect(actual).to.equal(expected);
  });
  it("Should ignore capital letters", () => {
    let input = "Mercy";
    let encode = true;
    const expected = "2351243145";
    const actual = polybius(input, encode);
    expect(actual).to.equal(expected);
  });
  it("Should maintain spaces while encoding", () => {
    let input = "Mercy m";
    let encode = true;
    const expected = "2351243145 23";
    const actual = polybius(input, encode);
    expect(actual).to.equal(expected);
  });
  it("Should maintain spaces while decoding", () => {
    let input = "2351243145 23";
    let encode = false;
    const expected = "mercy m";
    const actual = polybius(input, encode);
    expect(actual).to.equal(expected);
  });
});
