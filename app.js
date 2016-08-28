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

function divisible(firstArray, secondArray) {
    let finalAnswer = 0;
    // this for loop needs to lose its value
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

function receiveTheCode() {
    let request = new XMLHttpRequest();
    request.open('GET', 'https://puzzlegram.herokuapp.com/fortune');
    request.addEventListener('load', function() {
        let delivery = JSON.parse(request.responseText);
        let letters = delivery.letters;
        let encodedNumberArray = [];
        // console.log(letters);
        // console.log(letters[0]);
        // console.log(letters[0].inputs);
        // console.log(letters[0].operation);
        if (letters[0].operation === "fraction") {
            let output = fraction(letters[0].inputs[0], letters[0].inputs[1]);
            encodedNumberArray.push(output);
        }
        if (letters[0].operation === "divisible") {
            let output = divisible(letters[0].inputs[0], letters[0].inputs[1]);
            encodedNumberArray.push(output);
        }
        if (letters[1].operation === "celebrity") {
            
        }
        console.log(encodedNumberArray);
    });
    request.send();
}

window.addEventListener('load', function() {
    receiveTheCode();
});