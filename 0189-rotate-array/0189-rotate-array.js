/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {

    let n = nums.length
    k = k % n

    let end = nums.splice(n - k)
    let ans = end.concat(nums)
    
    for(let i = 0; i < n; i++){
        nums[i] = ans[i]
    }

    console.log(ans)

    

    
};