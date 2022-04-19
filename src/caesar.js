// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    const alphabet = [
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

    let lowerCaseInput = input.toLowerCase();
    let theChar = "";
    let numb = 0;
    let numArray = [];
    let theInput = [];
    theInput.push(lowerCaseInput);

    console.log("This is the input", theInput);
    if (shift === 0 || shift > 25 || shift < -25 || !shift) {
      return false;
    }
    if (encode) {
      for (let i = 0; i < lowerCaseInput.length; i++) {
        theChar = lowerCaseInput[i];

        if (alphabet.includes(theChar)) {
          for (let k = 0; k < alphabet.length; k++) {
            if (alphabet[k] === theChar) {
              numb = shift + k;
              if (numb > 25) {
                numb = numb - 26;
              }
              if (numb < 0) {
                numb = numb + 26;
              }
              //console.log(numArray);
              numArray.push(alphabet[numb]);
            }
          }
        } else {
          numArray.push(theChar);
        }
      }
      let letters = numArray.join("");
      return letters;
    }
    if (!encode && shift > 0) {
      for (let i = 0; i < lowerCaseInput.length; i++) {
        theChar = lowerCaseInput[i];
        if (alphabet.includes(theChar)) {
          for (let k = 0; k < alphabet.length; k++) {
            if (alphabet[k] === theChar) {
              numb = -shift + k;
              if (numb < 0) {
                numb = numb + 26;
              }
              numArray.push(alphabet[numb]);
            }
          }
        } else {
          numArray.push(theChar);
        }
      }
      let letters = numArray.join("");
      return letters;
    } else if (!encode && shift < 0) {
      for (let i = 0; i < lowerCaseInput.length; i++) {
        theChar = lowerCaseInput[i];
        if (alphabet.includes(theChar)) {
          for (let k = 0; k < alphabet.length; k++) {
            if (alphabet[k] === theChar) {
              numb = -shift + k;
              if (numb > 25) {
                numb = numb - 26;
              }
              numArray.push(alphabet[numb]);
            }
          }
        } else {
          numArray.push(theChar);
        }
      }
      let letters = numArray.join("");
      return letters;
    }
    //console.log("My name is Mercy")
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
