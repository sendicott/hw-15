//------------------fraction------------------

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
    return denominator;
}
//------------------fraction------------------

//------------------divisible------------------
function divisible(firstArray, secondArray) {
    let finalAnswer = 0;
    for (let i = 0; i < firstArray.length; i++) {
        for (let a = 0; a < secondArray.length; a++) {
            if (firstArray[i] % secondArray[a] !== 0) {
                firstArray[i] = 0;
            } 
        }
    }
    for (let i = 0; i < firstArray.length; i++) {
        finalAnswer += firstArray[i];
    }
    return finalAnswer;
}
//------------------divisible------------------

//------------------longx------------------
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
//------------------longx------------------

//------------------celebrity------------------
function celebrity(catalogOfLives) {
    let personArray = [];
    for (let i = 0; i < catalogOfLives.length; i++) {
        for (let a = catalogOfLives[i].birth; a < catalogOfLives[i].death; a++) {
            personArray.push(a);
        }
    }
    let longin = 0;
    let current = 0;
    let allTheYears = personArray.sort();
    for (let i = 1; i < allTheYears.length; i++) {
        if (allTheYears[i] !== allTheYears[i - 1]) {
            current = 1;
        } else if (allTheYears[i] === allTheYears[i - 1]) {
            current = current + 1;
            if (current > longin) {
                longin = current;
            }
        }
    }
    return longin;
}
//------------------celebrity------------------

//------------------most------------------
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
        if (alphaCount[letter] > biggun) {
            biggun = alphaCount[letter];
        }
    }
    return biggun;
}
//------------------most------------------

function receiveTheCode() {
    let request = new XMLHttpRequest();
    request.open('GET', 'https://puzzlegram.herokuapp.com/fortune');
    request.addEventListener('load', function() {
        let delivery = JSON.parse(request.responseText);
        let letters = delivery.letters;
        let encodedNumberArray = [];

        for (i = 0; i < letters.length; i++) {
    // fraction
            if (letters[i].operation === "fraction") {
                let output = fraction(letters[i].inputs[0], letters[i].inputs[1]);
                encodedNumberArray.push(output);
            }
    // divisible
            if (letters[i].operation === "divisible") {
                let output = divisible(letters[i].inputs[0], letters[i].inputs[1]);
                encodedNumberArray.push(output);
            }
    // longx
            if (letters[i].operation === "longx") {
                let output = longx(letters[i].inputs[0]);
                encodedNumberArray.push(output);
            }
    // celebrity
            if (letters[i].operation === "celebrity") {
                let output = celebrity(letters[i].inputs[0]);
                encodedNumberArray.push(output);
            }
    // most
            if (letters[i].operation === "most") {
                let output = most(letters[i].inputs[0]);
                encodedNumberArray.push(output);
            }
        }
    // decode and join the message into one message
        let decodedMessage = [];
        for (i = 0; i < encodedNumberArray.length; i++) {
            decodedMessage.push(String.fromCharCode(encodedNumberArray[i]));
        }
        let readyToAppend = decodedMessage.join("");
    // TIME TO APPEND SOME SHIT
        let parent = document.querySelector("#outerBox");
        console.log(letters)
        console.log(encodedNumberArray);
        console.log(decodedMessage);
        let template = document.querySelector('#cryptogram-template').innerHTML;
        let section = document.createElement('section');
        section.innerHTML = Mustache.render(template, { decodedMessage: decodedMessage });
        parent.appendChild(section);
    });
    request.send();
}

window.addEventListener('load', function() {
    receiveTheCode();
});