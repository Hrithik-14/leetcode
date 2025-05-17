/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    let ans1 = nums.reduce((acc, curr) => acc + curr, 0)

    let ans2 = nums.map(num => num.toString()).join('').split('').reduce((acc,curr) => acc + Number(curr),0)

    return (ans1 - ans2)
    
    
};