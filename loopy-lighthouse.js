for (let i = 100; i <= 200; i++) {
  let result = "";
  if (i % 3 === 0) {
    result += "Loopy";
  }
  if (i % 4 === 0) {
    result += "Lighthouse";
  }
  if (result) {
    console.log(result);
  } else {
    console.log(i);
  }
}