// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  function withinRange(x, y, z) {
    return x>=y && x<=z
  }

  // encode the char code and return the number pair as a string
  function numToString(x) {
    if (x > 105) {
      x--
    }
    
    num1 = ((x-96) % 5)
    addon = 1
    if (num1 === 0) {
      addon = 0
      num1 = 5
    }
    num2 = (Math.floor((x-96)/5)) + addon
    return num1.toString() + num2.toString()
  }

  // decode the number pair and return the letter as a string
  function newChar(x, y) {
    x = parseInt(x, 10)
    y = parseInt(y, 10)

    charCode = ((y-1)*5) + 96 + x
    if (charCode < 105) {
      return String.fromCharCode(charCode)
    } else if (charCode > 105) {
      return String.fromCharCode(charCode+1) 
    } else {
      return "(i/j)"
    }
  }

  // check if amount of numbers in input is even
  function isEven(input) {
    let count = 0
    for (i=0; i<input.length; i++) {
      if (withinRange(input[i], 49, 53)) {
        count++
      }
    }
    return (count % 2 === 0) ? true : false
  }

  function polybius(input, encode = true) {
    result = ""

    // this variable is a placeholder for skipping an index when decoding an input
    skippable = false

    // determines whether to encode or decode
    if (encode === true) {
      newInput = input.toLowerCase()
      for (i=0; i<newInput.length; i++) {
        if (withinRange(newInput.charCodeAt(i), 97, 122)) {
          result += numToString(newInput.charCodeAt(i))
        } else {
          result += newInput.charAt(i)
        }
      }
    } else {
      if (!isEven(input)) return false;

      for (i=0; i<input.length; i++) {
        // checks if input[i] has been decoded as part of a pair already
        if (skippable === true) {
          skippable = false
          continue
        }
        
        // skips spaces
        if (input[i] === " ") {
          result += input[i]
        }

        // skips input[i+1] once the pairs at i, i+1 have been decoded
        if (withinRange(input.charCodeAt(i), 49, 53)) {
          result += newChar(input[i], input[i+1])
          skippable = true
        }
      }
    }

   return skippable ? false : result
  }

  return {
    polybius,
  };
})();

module.exports = polybiusModule.polybius;
