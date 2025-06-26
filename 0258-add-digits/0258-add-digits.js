/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {

    if(num<10){
        return num
    }

    let ans = num.toString().split('')

    let sum = 0

    for(const x of ans){
        sum += parseInt(x)
    }
    return addDigits(sum)
    
};