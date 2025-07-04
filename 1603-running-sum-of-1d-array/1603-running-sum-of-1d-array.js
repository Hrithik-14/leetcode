/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {

    let ans1 = 0
    let ans2 = []

    for(x of nums){
        ans1 += x
        ans2.push(ans1)
    }
return ans2

    
};