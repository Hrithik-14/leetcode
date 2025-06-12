/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let i = 0;
    let n = s.length;
    let result = 0;
    let sign = 1;
    while (i < n && s[i] === ' ') {
        i++;
    }
    if (i < n && (s[i] === '-' || s[i] === '+')) {
    sign = s[i] === '-' ? -1 : 1;
    i++;
  }

 
  while (i < n && s[i] >= '0' && s[i] <= '9') {
    const digit = s[i].charCodeAt(0) - '0'.charCodeAt(0);

   
    if (result > Math.floor((2 ** 31 - 1) / 10) || 
        (result === Math.floor((2 ** 31 - 1) / 10) && digit > 7)) {
      return sign === 1 ? 2 ** 31 - 1 : -(2 ** 31);
    }

    result = result * 10 + digit;
    i++;
  }

  return result * sign;
    
};