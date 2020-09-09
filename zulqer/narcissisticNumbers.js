function narcissisticNumbers(start = 10, end = 10000) {
    var result = [];
  
    for (var i = start; i <= end; i++) {
      const arrayOfCurrentNumber = String(i).split("");
      sum = 0;
      for (let j = 0; j < String(arrayOfCurrentNumber).length; j++) {
        const power = Math.pow(parseInt(arrayOfCurrentNumber[j]), arrayOfCurrentNumber.length);
  
        if (!isNaN(power)) {
          sum += power;
        }
      }
      if (sum === i) {
        result.push(i);
      }
    }
    return result;
  }