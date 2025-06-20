/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {

    const ans =[]
    const flatArray = grid.flat()

    for(let i = 0; i< flatArray.length; i++){
        
        if(flatArray[i]<0){

            ans.push(flatArray[i])
        }
    }
    return ans.length
};