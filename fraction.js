import test from 'ava';

/** Write a function that accepts two numbers 
 * (the first is a numerator, the second is a 
 * denominator). It should return the denominator 
 * when the fraction has been simplified. PS don't 
 * be ashamed to refresh yourself on what a simplified 
 * fraction is...I had to too.
 */

function fraction(nominator, denominator) {
    let lower = 0;
    if ( nominator < denominator) {
        lower = nominator;
    } else {
        lower = denominator;
    }
    for (let i = lower; i >= 2; i--) {
        if (nominator % i === 0 && denominator % i === 0) {
            return denominator / i;
        }
    }
}


test(function(current) {
    current.deepEqual(fraction(12, 48), 4);
});