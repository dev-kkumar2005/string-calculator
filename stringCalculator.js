function add(numbers) {
  if (numbers === '') {
      return 0;
  }

  let delimiter = /[\n,]/;
  if (numbers.startsWith('//')) {
      const parts = numbers.split('\n');
      delimiter = new RegExp(parts[0][2]);
      numbers = parts[1];
  }

  const numsArray = numbers.split(delimiter).map(Number);
  const negatives = numsArray.filter(num => num < 0);
  if (negatives.length > 0) {
      throw new Error('Negatives not allowed: ' + negatives.join(', '));
  }

  return numsArray.reduce((sum, num) => sum + num, 0);
}


module.exports = add;
