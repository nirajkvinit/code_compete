
function isNarcissisticNumber(num: number): boolean {
    let isNarcissistic: boolean = false;
    const arrayOfCurrentNumber = String(num).split("");
    const length = arrayOfCurrentNumber.length;
    let sum: number = 0;
    for(let i: number = 0; i < length; i++) {
        sum += Math.pow(parseInt(arrayOfCurrentNumber[i]), length);
    }
    if (sum === num) {
        isNarcissistic = true;
    }
    return isNarcissistic;
}

function getNarcissisticNumbersInRange(start: number, end: number): Array<number> {
    const narcissisticNumbers: Array<number> = [];
    for(let i: number = start; i <= end; i++) {
        isNarcissisticNumber(i)&&narcissisticNumbers.push(i)
    }
    return narcissisticNumbers;
}

export { isNarcissisticNumber, getNarcissisticNumbersInRange };
