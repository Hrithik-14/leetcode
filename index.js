var reverse = function(x) {

    let reversed = 0;
    let sign = x < 0 ? -1 : 1;
    x = Math.abs(x);

    while (x > 0) {
        let digit = x % 10;
        reversed = reversed * 10 + digit;
        x = Math.floor(x / 10);
    }

    reversed *= sign;

    if (reversed < -(2 ** 31) || reversed > 2 ** 31 - 1) {
        return 0;
    }

    return reversed;
}
reverse(123)
reverse(123)
reverse(123)