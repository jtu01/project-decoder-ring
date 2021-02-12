// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  function withinRange (x, y, z) {
    return x>=y && x<=z
  }

  // loops charCode back around to make sure it is in the alphabet
  function checkCode(charCode) {
    while (charCode < 97) {
      charCode += 26
    }
    while (charCode > 122) {
      charCode -= 26
    }
    return charCode
  }

  function caesar(input, shift, encode = true) {
    // checks for adequate shift value
    if (!shift || !(withinRange(shift, -25, 25) && shift != 0)) {
      return false
    }

    // encodes/decodes given input by shift
    const newInput = input.toLowerCase()
    let result = ""
    for (i=0; i<newInput.length; i++) {
      const charCode = newInput.charCodeAt(i)
      if (!withinRange(charCode, 97, 122)) {
        result += newInput.charAt(i)
      } else {
        const newShift = (encode === true) ? shift : shift*-1
        const newCharCode = charCode + newShift
        const fixedCharCode = checkCode(newCharCode)
        result += String.fromCharCode(fixedCharCode)
      }
    }
    return result
  }

  return {
    caesar,
  };
})();

module.exports = caesarModule.caesar;
