/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
    let ans = new Set(candyType)
    if(ans.size > candyType.length/2){
        return candyType.length/2
    }
else{
    return ans.size
}
};