import narcissistic from './index';

const isNarcissistic = (num: number): boolean => {
  const str = num.toString();
  let res = str.split('').reduce((acc, each) => acc + Math.pow(+each, str.length), 0);
  return num === res;
}

test('is a function', () => {
  expect(typeof narcissistic).toEqual('function');
});

test('153 is narcissistic', () => {
  const numbers = narcissistic(150,160);
  expect(numbers[0]).toBe(153);
});

test('no values between 10 to 100', () => {
  const numbers = narcissistic(10,100);
  expect(numbers.length).toEqual(0);
});

test('values got is narcissistic', () => {
  const numbers = narcissistic(10,1000);
  expect(isNarcissistic(numbers[1])).toBe(true);
});

test('values got is narcissistic', () => {
  const output = [
    153,  370,  371,
    407, 1634, 8208,
   9474
 ]
  const numbers = narcissistic(10,10000);
  expect(JSON.stringify(numbers)).toEqual(JSON.stringify(output));
});
