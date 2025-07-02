/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    for(let x of words){
        let reverse = x.split('').reverse().join('')

        if(reverse === x){
            return reverse
        }

    }
    return ""
};