/**
 * Write a function that accepts two arrays of numbers. 
 * It should return the sum of the numbers in the first 
 * array that are evenly divisible by all of the numbers 
 * in the second array.
 * 
 * If the full-array number is divisible by all the numbers in
 * the divis-array, that number should be pushed to keepers
 * 
 * If the number is not divisible by all the numbers in divis,
 * then move onto the next number in the full-array
 */

let full = [4, 42, 6, 28, 12, 17];
let divis = [2, 4];

function divisible(firstArray, secondArray) {
    let finalAnswer = 0;
    for (let i = 0; i < firstArray.length; i++) {
        for (let a = 0; a < secondArray.length; a++) {
            if (firstArray[i] % secondArray[a] !== 0) {
                console.log(i + ": " + firstArray[i]);
                firstArray.splice(i, 1);
            } 
        }
    }
    console.log(firstArray);
    for (let i = 0; i < firstArray.length; i++) {
        finalAnswer += firstArray[i];
    }
    console.log(finalAnswer);
}

divisible(full, divis);