/**
 * @param {number} n
 * @return {number}
 */
var alternateDigitSum = function(n) {
    let str = n.toString()
    let totalSum = 0
    let current = 1
for (let x of str ) {
        totalSum += parseInt(x) * current
        current *= -1
    }
    return totalSum
    
    
};