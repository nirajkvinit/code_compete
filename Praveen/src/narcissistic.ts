/**
 * Function to find that the given number is Narcissistic Number or not
 * @date 2020-09-09
 * @param {number} num number to check if it is Narcissistic Number
 * @returns {boolean} true or false
 */
function checkIfNarcissisticNumber(num: number): boolean {
    let isNarcissisticNumber: boolean = false;
    const numberStr = num.toString();
    const numberLength = numberStr.length;
    let sum: number = 0;
    for(let i: number = 0; i < numberLength; i++) {
        const digit = parseInt(numberStr.substr(i, 1));
        sum += Math.pow(digit, numberLength);
    }
    if (sum === num) {
        isNarcissisticNumber = true;
    }
    return isNarcissisticNumber;
}


/**
 * Function to find all the Narcissistic Numbers in the given range
 * @date 2020-09-09
 * @param {number} startNum starting number in the range
 * @param {number} endNum ending number in the range
 * @returns {Array} A array of Narcissistic Numbers
 */
function getNarcissisticNumbersWithinRange(startNum: number, endNum: number): Array<number> {
    const narcissisticNumbers: Array<number> = [];
    for(let i: number = startNum; i <= endNum; i++) {
        const isNarcissisticNumber: boolean = checkIfNarcissisticNumber(i);
        if (isNarcissisticNumber) {
            narcissisticNumbers.push(i);
        }
    }
    return narcissisticNumbers;
}

export { checkIfNarcissisticNumber, getNarcissisticNumbersWithinRange };
