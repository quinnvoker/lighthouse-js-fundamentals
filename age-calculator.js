const ageCalculator = function (name, yearOfBirth, currentYear) {
  return (name + " is " + (currentYear - yearOfBirth) + " years old.");
}

console.log(ageCalculator("Quinn", 1990, 2020));
console.log(ageCalculator("Suzie", 1983, 2015));
console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));