// Narcissistic Number : An n-digit number that is the sum of the nth powers of its digits is called an n-narcissistic number. 
// It is also sometimes known as an Armstrong number
// Example: 
// 	153 = (1*1*1)+(5*5*5)+(3*3*3)
// 	1634 = (1*1*1*1)+(6*6*6*6)+(3*3*3*3)+(4*4*4*4)
// Problem
// 	Find all the Narcissistic Numbers between 10 to 10000


const isNarcissistic = (num: number): boolean => {
    const str = num.toString();
    let res = str.split('').reduce((acc, each) => acc + Math.pow(+each, str.length), 0);
    return num === res;
}

const narcissisticPrinter = (start: number, end: number): Array<number> => {
    const arr = [];
    for(let i:number = start; i <= end; i++){
        isNarcissistic(i) && arr.push(i);
    }
    return arr;
}
// console.log(narcissisticPrinter(10, 10000))

export default narcissisticPrinter;