stringsAnswers = {
  /**
   * Reduces a string by removing letters that repeat more than amount times.
   *
   * Example: reduceString('aaaabbb', 1) should reduce to 'ab'
   * Example: reduceString('aaaabbb', 2) should reduce to 'aabb'
   *
   * @param {String} str - String that is to be reduced
   * @param {Number} amount - The maximum number of adjacent repeated letters in the result string.
   * @returns {String} A string with no more than amount number of repeated letters.
   */
  reduceString: function reduceString(str, amount) {
    let strCopy = str;
    let replacingString = '';
    let result = '';
    let currentChar = str.charAt(0);
    let regex = new RegExp(`${currentChar}+`);
    let strMatch = strCopy.match(regex);
    while (strMatch !== null) {
      replacingString = strMatch[0];
      strCopy = strCopy.slice(strMatch[0].length);
      currentChar = strCopy.charAt(0);
      if (strMatch[0].length <= amount) {
        result = result.concat(replacingString);
        regex = new RegExp(`${currentChar}+`);
        strMatch = strCopy.match(regex);
      } else {
        result = result.concat(replacingString[0].repeat(amount));
        if (currentChar !== '') {
          regex = new RegExp(`${currentChar}+`);
        }
        strMatch = strCopy.match(regex);
      }
    }
    return result;
  },

  /**
   * Reverses a string of text
   *
   * Example: reverseString('abc') should be 'cba'
   *
   * @param {String} str - a string of text to be reversed
   * @returns {String} The original string of text str reversed.
   */
  reverseString: function reverseString(str) {
    return str.split('').reverse().join('');
  },
};
