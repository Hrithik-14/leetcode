/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
nums.sort((a, b) => a - b);

    const n = nums.length;
    const nums1 = nums[n - 1] * nums[n - 2] * nums[n - 3];
    const nums2 = nums[0] * nums[1] * nums[n - 1];

    return Math.max(nums1, nums2);
    
};