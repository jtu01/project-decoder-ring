// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  function uniqueItems(alphabet) {
    alpha = [...new Set(alphabet)]
    console.log(alpha)
    return alpha.length === 26
  }

  function getIndex(alphabet, char) {
    return alphabet.indexOf(char)
  }

  function getChar(alphabet, i) {
    return alphabet.charAt(i)
  }

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    if (uniqueItems(alphabet) === false) return false;

    let result = ""
    const englishAlphabet = "abcdefghijklmnopqrstuvwxyz"
    if (encode === true) {
      newInput = input.toLowerCase()
      for (i=0; i<newInput.length; i++) {
        if (newInput[i] != " ") {
          index = getIndex(englishAlphabet, newInput[i])
          result += getChar(alphabet, index)
        } else {
          result += input[i]
        }
      }
    } else {
      for (i=0; i<input.length; i++) {
        if (input[i] != " ") {
          index = getIndex(alphabet, input[i])
          result += getChar(englishAlphabet, index)
        } else {
          result += input[i]
        }
      }
    }
    return result
  }

  return {
    substitution,
  };
})();

module.exports = substitutionModule.substitution;