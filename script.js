let finalEquation = "";

let skipChar = 0;

let number = "";
let resultNumber;

let totalNumbers = [];
let operatorTotal = [];

function inputValue(value) {
    finalEquation = finalEquation + value;
    console.log(finalEquation);
}

function findNumber() {
    finalEquation = finalEquation + " ";

    for (let x = skipChar; x < finalEquation.length; x++) {
        if (finalEquation.charAt(x).codePointAt() >= 48 && finalEquation.charAt(x).codePointAt() <= 57) {
            number = number + finalEquation.charAt(x);
        }

        else {
            resultNumber = parseFloat(number);
            skipChar = x;

            operatorTotal.push(finalEquation.charAt(x));

            totalNumbers.push(resultNumber);

            number = "";

            continue;
        }
    }
}