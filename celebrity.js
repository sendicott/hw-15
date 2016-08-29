import test from 'ava';

/**
 * Write a function that accepts an array of objects
 * Each object needs a birth and death property (the year the person 
 *      was born and the year they died).
 *  
 * Return the largest number of people that were alive 
 * during the same year from the population described in the array.
 * 
 * Everyone will be born between 1900 and die by 2250.
 */

/**
 * I need to run through each of these objects
 * I need to record which years each of them include
 * I need to compare those years to see which year(s)
 *      show(s) up most often
 * Take the year(s) with the most traction and return the
 *      number of objects that include that year/those years
 */

let smallerTest = [
    {
        birth: 1907,
        death: 1913
    },

    {
        birth: 1913,
        death: 1918
    },

    {
        birth: 1913,
        death: 1913
    }
]

let testArray = [
    // Czeslaw Milosz
    {
        birth: 1911,
        death: 2004
    },
    // Flannery O'Connor
    {
        birth: 1925,
        death: 1964
    },
    // Heath Ledger
    {
        birth: 1979,
        death: 2008
    },
    // Seamus Heaney
    {
        birth: 1939,
        death: 2013
    },
    // Harper Lee
    {
        birth: 1926,
        death: 2016
    },
    // Fr. Seraphim Rose
    {
        birth: 1934,
        death: 1982
    },

    {
        birth: 1979,
        death: 1979
    }
]

// function celebrity(catalogOfLives) {
//     let longin = 0;
//     let current = 1;
//     let personArray = [];
//     for (let i = 0; i < catalogOfLives.length; i++) {
//         for (let a = catalogOfLives[i].birth; a <= catalogOfLives[i].death; a++) {
//             personArray.push(a);
//         }
//     }
//     let allTheYears = personArray.sort();
//     for (let y = 1; y < allTheYears.length; y++) {
//         if (allTheYears[y] !== allTheYears[y - 1]) {
//             current = 1;
//         } else if (allTheYears[y] === allTheYears[y - 1]) {
//             current = current + 1;
//             if (current > longin) {
//                 longin = current;
//             }
//         }
//     }
//     return longin;
// }



test(function (current) {
    current.deepEqual(celebrity(smallerTest), 3);
});

function celebrity (arrayOfCelebrities) {
    // console.log(arrayOfCelebrities);
    let tally = [];
    for (let i = 0; i < arrayOfCelebrities.length; i++) {
        for (let j = arrayOfCelebrities[i].birth; j <= arrayOfCelebrities[i].death; j++) {
            tally.push(j);
        }
    }
    tally.sort();
    console.log(tally);
    let biggun = 0;
    let current = 0;
    let currentYear = tally[0];
    for (let i = 0; i < tally.length; i++) {
        if (tally[i] === currentYear) {
            current++;
        } else {
            if (current > biggun) {
                biggun = current;
            }
            current = 1;
        }
        currentYear = tally[i];
    }
    return biggun;
}