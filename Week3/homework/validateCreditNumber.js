function validateCreditNumber(num) {
    let result = [];
    numString = num.toString();
    if (numString.length != 16) result.push('should contain 16 characters');
    let firstNum = numString[0];
    let sum = 0;
    let flagTwoDifferent = false;
    let flagIsNumbers = true;
    for (let i=0; i<16; i++) {
        if (!parseInt(numString[i])) {
            result.push('should contain only numbers');
            flagIsNumbers = false;
            break; 
        }
        sum = sum + parseInt(numString[i]);
        if (firstNum !== numString[i]) flagTwoDifferent = true;
    }
    if (flagIsNumbers && !flagTwoDifferent) result.push('should contain at least 2 different types of numbers');
    if (parseInt(numString[15]) % 2 != 0) result.push('should contain the even final number');
    if (flagIsNumbers && sum <= 16) result.push('sum of all the numbers must be greater than 16');
    if (result === []) {return `Success! The input ${num} is a valid credit card number!`} 
    else {
        resultString = 'Invalid! The input ' + num;
        for (let item of result) {
            resultString = resultString + ', ' + item;
        }
        return resultString + '!';
    }
}

console.log(validateCreditNumber('a92332119c011113'));
console.log(validateCreditNumber('4444444444444444'));
console.log(validateCreditNumber('6666666666661666'));

