import {
    getNarcissisticNumbersWithinRange,
    checkIfNarcissisticNumber
} from '../src/narcissistic';

describe('testing checkIfNarcissisticNumber function', function() {
    it('testing if 153 is NarcissisticNumber ', function() {
      let result = checkIfNarcissisticNumber(153);
      expect(result).toBe(true);   
    })
    it('testing if 1634 is NarcissisticNumber ', function() {
      let result = checkIfNarcissisticNumber(1634);
      expect(result).toBe(true);   
    })
    it('testing if 150 is not NarcissisticNumber ', function() {
      let result = checkIfNarcissisticNumber(150);
      expect(result).toBe(false);   
    })
    it('testing if 10 is not NarcissisticNumber ', function() {
      let result = checkIfNarcissisticNumber(10);
      expect(result).toBe(false);   
    })
});


describe('testing getNarcissisticNumbersWithinRange function', function() {
    it('testing if there is not narcissistic numbers between 10 and 20', function() {
      let result = getNarcissisticNumbersWithinRange(10, 20);
      expect(result).toEqual([]);   
    })
    it('testing if there are 7 narcissistic numbers [153,  370,  371, 407, 1634, 8208, 9474] between 10 and 10000', function() {
      let result = getNarcissisticNumbersWithinRange(10, 10000);
      let desiredResult = [153,  370,  371, 407, 1634, 8208, 9474];
      expect(result).toEqual(desiredResult);   
    })
});
