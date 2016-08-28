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

let full = [4, 6, 12, 17];
let divis = [2, 4];

function divisible(firstArray, secondArray) {
    let keepers = [];
    for (let i = 0; i < firstArray.length; i++) {
        for (let a = 0; a < secondArray.length; a++) {
            if (firstArray[i] % secondArray[a] === 0) {
                if (secondArray[a] === secondArray[secondArray.length]) {
                    keepers.push(firstArray[i]);
                }
            }
        }
    }
    console.log(keepers);
}

divisible(full, divis);

