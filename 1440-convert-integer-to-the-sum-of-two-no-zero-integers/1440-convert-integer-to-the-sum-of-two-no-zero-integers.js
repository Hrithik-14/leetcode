/**
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function(n) {

  function hasZero(num) {
    return num.toString().includes("0");
  }

  let a = 1, b = n - 1;
  while (hasZero(a) || hasZero(b)) {
    a++;
    b = n - a;
  }
  return [a, b];

    
};