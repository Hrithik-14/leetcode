/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let n = nums.length
    let expectedSum = n*(n+1)/2
    let sum = nums.reduce((acc,curr)=> acc+curr,0)
    let result = expectedSum - sum

    return result
    
};