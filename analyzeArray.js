function analyzeArray(numbers) {
  let average;
  let sum = 0;
  let min = 100000;
  let max = -100000;
  let length = numbers.length;
  for (let number of numbers) {
    sum += number;
    min = Math.min(min, number);
    max = Math.max(max, number);
  }
  average = length !== 0 ? sum / length : 0;
  return { average, min, max, length };
}

module.exports = analyzeArray;
