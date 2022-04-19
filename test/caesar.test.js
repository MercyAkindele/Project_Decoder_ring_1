// Write your tests here!
const expect = require("chai").expect;
const { caesar } = require("../src/caesar");

/* the Caesar shift (example: caesar("Zebra Magazine", 3) => "cheud pdjdclqh"), the tests that you write should test that the following is true:*/
describe("caesar", () => {
  it("Should return false if shift is 0", () => {
    const expected = false;
    let input = "Zebra Magazine";
    let shift = 0;
    let encode = true;
    const actual = caesar(input, shift, encode);
    expect(actual).to.equal(expected);
  });
  it("Should return false if shift is less than -25", () => {
    let input = "Zebra Magazine";
    let shift = -26;
    let encode = true;
    const expected = false;
    const actual = caesar(input, shift);
    expect(actual).to.equal(expected);
  });
  it("Should return false if shift is greater than 25", () => {
    let input = "Zebra Magazine";
    let shift = 26;
    let encode = true;
    const expected = false;
    const actual = caesar(input, shift);
    expect(actual).to.equal(expected);
  });
  it("Should return false if shift is not given", () => {
    let input = "Zebra Magazine";
    let encode = true;
    let shift = null;
    const expected = false;
    const actual = caesar(input, shift);
    expect(actual).to.equal(expected);
  });
  it("Should ignore capital letters while encoding", () => {
    let input = "MERCY";
    let shift = 1;
    let encode = true;
    const expected = "nfsdz";
    const actual = caesar(input, shift, encode);
    expect(actual).to.equal(expected);
  });
  it("Should be able to go past the letter z and loop back starting with a for encoding", () => {
    let input = "Zebra";
    let shift = 1;
    let encode = true;
    const expected = "afcsb";
    const actual = caesar(input, shift, encode);
    expect(actual).to.equal(expected);
  });
  it("Should maintain the spaces and nonalphabetic symbols given from the input when encoding", () => {
    let input = "Mercy *Akindele*";
    let shift = 1;
    let encode = true;
    const expected = "nfsdz *bljoefmf*";
    const actual = caesar(input, shift, encode);
    expect(actual).to.equal(expected);
  });
  it("Should maintain the spaces and nonalphabetic symbols given from the input when decoding", () => {
    let input = "Mercy *Akindele*";
    let shift = -1;
    let encode = false;
    const expected = "nfsdz *bljoefmf*";
    const actual = caesar(input, shift, encode);
    expect(actual).to.equal(expected);
  });
  it("Should ignore capital letters while decoding", () => {
    let input = "LDQBX";
    let shift = -1;
    let encode = false;
    const expected = "mercy";
    const actual = caesar(input, shift, encode);
    expect(actual).to.equal(expected);
  });
  it("Should be able to go past the letter 'z' and loop back starting with 'a' when decoding", () => {
    let input = "Zebra";
    let shift = -1;
    let encode = false;
    const expected = "afcsb";
    const actual = caesar(input, shift, encode);
    expect(actual).to.equal(expected);
  });
  it("Should maintain the spaces and nonalphabetic symbols given from the input when decoding", () => {
    let input = "Ldqbx *Zjhmcdkd*";
    let shift = -1;
    let encode = false;
    const expected = "mercy *akindele*";
    const actual = caesar(input, shift, encode);
    expect(actual).to.equal(expected);
  });
});
/*



When encoding, it handles shifts that go past the end of the alphabet. (For example, shifting z to the right by 3 should cause the z to wrap around to the front of the alphabet, so that z becomes c.)

It maintains spaces and other nonalphabetic symbols in the message, before and after encoding or decoding.*/
