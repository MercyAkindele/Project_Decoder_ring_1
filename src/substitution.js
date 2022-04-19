// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    if (!alphabet || alphabet.length !== 26) {
      return false;
    } else if (alphabet && alphabet.length === 26) {
      for (let i = 0; i < alphabet.length; i++) {
        for (let k = i + 1; k < alphabet.length; k++) {
          if (alphabet[i] === alphabet[k]) {
            return false;
          }
        }
      }
    }

    const myAlphabet = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];
    console.log(myAlphabet);
    let lowerCaseInput = input.toLowerCase();
    let theChar = "";
    let pushedEncode = [];
    let pushedDecode = [];
    //console.log("this is the alphabet given", alphabet);
    //console.log("this is the input given", lowerCaseInput);

    //console.log('this is the alphabet array',alphabet)
    if (encode) {
      for (let i = 0; i < lowerCaseInput.length; i++) {
        theChar = lowerCaseInput[i];
        if (theChar === " ") {
          pushedEncode.push(theChar);
        }
        if (myAlphabet.includes(theChar)) {
          for (let k = 0; k < myAlphabet.length; k++) {
            if (myAlphabet[k] === theChar) {
              //console.log(k === "12");
              //console.log(alphabet);
              pushedEncode.push(alphabet[k]);
            }
          }
          //console.log("this is my pushed message", pushedEncode.join(""));
        }
      }
      return pushedEncode.join("");
    } else {
      //console.log("This is my input", input);
      //console.log("this is the lowercase input", lowerCaseInput);
      //console.log("this is the alphabet given", alphabet);
      //console.log("this is my alphabet mapped", myAlphabet);

      for (let i = 0; i < lowerCaseInput.length; i++) {
        theChar = lowerCaseInput[i];
        if (theChar === " ") {
          pushedDecode.push(theChar);
        }
        if (alphabet.includes(theChar)) {
          for (let k = 0; k < alphabet.length; k++) {
            if (alphabet[k] === theChar) {
              console.log("this is k", k);
              console.log(
                "this is the alpha at k",
                pushedDecode.push(myAlphabet[k])
              );
            }
          }
          //console.log("this is my pushed decoding", pushedDecode.join(""));
        }
      }
      return pushedDecode.join("");
    }
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
