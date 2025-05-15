/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {

    let S = s.split('')
    let T = t.split('')

    for(let i = 0; i < S.length; i++){
        for(let j = 0; j < T.length; j++){

            if( S[i] === T[j]){
               
               T.splice(j,1)
               break
            }

        }
    }
    return T[0]
};