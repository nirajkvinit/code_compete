import {
     getNarcissisticNumbersInRange,
     isNarcissisticNumber
} from '..';

describe('testing isNarcissisticNumber function', function() {
    it('testing if 153 is NarcissisticNumber ', function() {
      let result = isNarcissisticNumber(153);
      expect(result).toBe(true);   
    })
    it('testing if 1634 is NarcissisticNumber ', function() {
      let result = isNarcissisticNumber(1634);
      expect(result).toBe(true);   
    })
    it('testing if 150 is not NarcissisticNumber ', function() {
      let result = isNarcissisticNumber(150);
      expect(result).toBe(false);   
    })
    it('testing if 10 is not NarcissisticNumber ', function() {
      let result = isNarcissisticNumber(10);
      expect(result).toBe(false);   
    })
});


describe('testing getNarcissisticNumbersInRange function', function() {
    it('testing if there is not narcissistic numbers between 10 and 20', function() {
      let result = getNarcissisticNumbersInRange(10, 20);
      expect(result).toEqual([]);   
    })
    it('testing if there are 7 narcissistic numbers [153,  370,  371, 407, 1634, 8208, 9474] between 10 and 10000', function() {
      let result = getNarcissisticNumbersInRange(10, 10000);
      let desiredResult = [153,  370,  371, 407, 1634, 8208, 9474];
      expect(result).toEqual(desiredResult);   
    })
});
