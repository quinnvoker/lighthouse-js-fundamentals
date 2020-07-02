const range = function (start, end, step) {
  let result = [];
  if (start === undefined || end === undefined || step === undefined || start > end || step <= 0) {
    return result;
  }
  for (let i = start; i <= end; i += step) {
    result.push(i);
  }
  return result;
}

console.log(range(10, 136, 16));

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));