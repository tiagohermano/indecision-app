"use strict";

var multiplier = {
  numbers: [3, 5, 10],
  multiplyBy: 4,
  multiply: function multiply() {
    var _this = this;

    return this.numbers.map(function (number) {
      return number * _this.multiplyBy;
    });
  }
};

console.log(multiplier.multiply());
