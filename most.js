import test from 'ava';

/**
 * Write a function that accepts a single string and 
 * returns the number of times the most frequently-occurring
 * character exists in the string.
 * (EXAMPLE): most('abcabcaba'); // returns 4
 */

function most(newString) {
    let stringArray = newString.split("");
    let alphaCount = {};
    for (let i = 0; i < stringArray.length; i++) {
        if (alphaCount.hasOwnProperty(stringArray[i]) === false) {
            alphaCount[stringArray[i]] = 1;
        } else if (alphaCount.hasOwnProperty(stringArray[i]) === true) {
            alphaCount[stringArray[i]] = alphaCount[stringArray[i]] + 1;
        }
    }
    let biggun = 0;
    for (let letter in alphaCount) {
        // console.log(letter + ": " + alphaCount[letter]);
        if (alphaCount[letter] > biggun) {
            biggun = alphaCount[letter];
        }
    }
    return biggun;
}

// console.log(most('fsdfhdwfsdfishdffffffffffakljdhsaiuglefsgk'));

test(function (current) {
    current.deepEqual(most('fjddfffffj'), 6);
    current.deepEqual(most('aaaaab'), 5);
    current.deepEqual(most('sdddddd'), 6);
    current.deepEqual(most('fdkjgh444444'), 6);
    current.deepEqual(most('fsdfs            fsdfffffsdf'), 12);
});

/**
 * Create an object
 * Make a list of properties for each letter of the alphabet
 * Run a For loop
 * If property exists, add +1 to value
 * If property doesn't exist, create it and add +1 value to it
 * Return highest value
 */