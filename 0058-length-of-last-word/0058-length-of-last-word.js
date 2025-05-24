/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
   let str = s.trim().split(" ")
  let word = str[str.length - 1] 
  return word.length
};
lengthOfLastWord("Hello World");
lengthOfLastWord("")