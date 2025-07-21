/**
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function(s) {
    let newString = ""
    let count = 0
    for(let i = 0; i < s.length; i++) {
        if (s[i] === s[i + 1]) {
            count++
        }else {
            count = 0
        }
    
        if (count < 2) {
            newString += s[i]
        }
    }
    return newString
};