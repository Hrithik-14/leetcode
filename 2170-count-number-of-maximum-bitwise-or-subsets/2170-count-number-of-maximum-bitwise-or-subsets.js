/**
 * @param {number[]} nums
 * @return {number}
 */
var countMaxOrSubsets = function(nums) {
        let maxOR = 0;
    for (const num of nums) {
        maxOR |= num;
    }

    let count = 0;
    const n = nums.length;

    for (let i = 1; i < (1 << n); i++) {
        let currentOR = 0;
        for (let j = 0; j < n; j++) {
            if (i & (1 << j)) {
                currentOR |= nums[j];
            }
        }
        if (currentOR === maxOR) {
            count++;
        }
    }

    return count;
    
};