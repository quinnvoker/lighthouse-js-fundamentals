const judgeVegetable = function(vegetables, metric) {
  let topVeggie;
  for (let vegetable of vegetables) {
    if (!topVeggie) {
      topVeggie = vegetable;
    } else if (vegetable[metric] > topVeggie[metric]) {
      topVeggie = vegetable;
    }
  }
  return topVeggie.submitter;
}

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
];

const metric = 'redness';

console.log(judgeVegetable(vegetables, metric));
