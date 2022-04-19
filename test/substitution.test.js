// Write your tests here!
const expect = require("chai").expect;
const { substitution } = require("../src/substitution");
describe("substitution", () => {
  it("Should return false if the alphabet given is not 26 characters long", () => {
    let input = "Mercy";
    let alphabet = "abc";
    let encode = true;
    const expected = false;
    const actual = substitution(input, alphabet, encode);
    expect(actual).to.equal(expected);
  });
  it("Should correctly translate the given phrase, based on the alphabet given to the function.", () => {
    let input = "Mercy";
    let alphabet = "zmxncbvalskdjfhgpqwoieurty";
    let encode = true;
    const expected = "jcqxt";
    const actual = substitution(input, alphabet, encode);
    expect(actual).to.equal(expected);
  });
  it("Should return false if there are any duplicate characters in the given alphabet.", () => {
    let input = "Mercy";
    let alphabet = "zmxncbvalskdjfhgpqwoieurtz";
    let encode = true;
    const expected = false;
    const actual = substitution(input, alphabet, encode);
    expect(actual).to.equal(expected);
  });
  it("Should maintain spaces in the message when encoding.", () => {
    let input = "Mercy m";
    let alphabet = "zmxncbvalskdjfhgpqwoieurty";
    let encode = true;
    const expected = "jcqxt j";
    const actual = substitution(input, alphabet, encode);
    expect(actual).to.equal(expected);
  });
  it("Should maintain spaces in the message when decoding.", () => {
    let input = "jcqxt j";
    let alphabet = "zmxncbvalskdjfhgpqwoieurty";
    let encode = false;
    const expected = "mercy m";
    const actual = substitution(input, alphabet, encode);
    expect(actual).to.equal(expected);
  });
  it("Should ignore capital letters.", () => {
    let input = "Mercy M";
    let alphabet = "zmxncbvalskdjfhgpqwoieurty";
    let encode = true;
    const expected = "jcqxt j";
    const actual = substitution(input, alphabet, encode);
    expect(actual).to.equal(expected);
  });
});
