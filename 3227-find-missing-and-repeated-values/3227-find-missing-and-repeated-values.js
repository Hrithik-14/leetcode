/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function(grid) {
    let missing = []
    let ans = grid.flat()
    ans = ans.sort((a,b)=>a-b)
    let n = ans.length
    let unique = [... new Set(ans)]
    for(let i = 0; i< ans.length; i++){
        if(ans[i] === ans[i+1]  ){
            missing.push(ans[i])
        }

    }
    let add = unique.reduce((acc,cur) => acc + cur,0)
    let sum = n *(n+1)/2
    let miss = [...missing, sum - add]
    return miss

    
};