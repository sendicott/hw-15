import test from 'ava';

// -----------------Completed longx Function-----------------
function longx(xstring) {
    let current = 0;
    let biggun = 0;
    let stringArray = xstring.split("");
    for (let i = 0; i < stringArray.length; i++) {
        if (stringArray[i] === "x") {
            current++;
        } else if (stringArray[i] !== "x") {
            if (current > biggun) {
                biggun = current;
            }
            current = 0;
        }
    }
    return biggun;
}
// -----------------Completed longx Function-----------------

test(function (current) {
    current.deepEqual(longx('xlkjlxlkjlkxjxxxxlfsdf'), 4);
    current.deepEqual(longx('fdfjkejfehkjhnd'), 0);
    current.deepEqual(longx('fdfxxxfdsflkjsxxx'), 3);
});

// Write a function that accepts a single string
// Returns length of the longest run of letter 'x' in string
/**
 * run for loop
 * two variables
 * biggun
 * current
 * if an x, add to current
 * if not x, compare current to biggun
 * if current is bigger than biggun, replace biggun with current
 * if current is smaller, leave biggun alone
 * revert current to 0
 * when for loop completes, return biggun 
 */