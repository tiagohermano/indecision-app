const multiplier = {
  numbers: [3,5,10],
  multiplyBy: 4,
  multiply() {
    return this.numbers.map((number) => number * this.multiplyBy);
  }
}

console.log(multiplier.multiply());
