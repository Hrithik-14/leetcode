/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {

    let Wor1 = ''
    let Wor2 = ''
    
   for(let i = 0; i < word1.length; i++){
     Wor1 += word1[i]
   }
      for(let j = 0; j < word2.length; j++){
     Wor2 += word2[j]
   }
   if(Wor1 === Wor2){
    return true
   }
   else{
    return false
   }
};