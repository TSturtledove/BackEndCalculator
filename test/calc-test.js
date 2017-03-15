const { assert: { isFunction, equal, isNumber} } = require("chai");
const {calc, calculateadd, calculatemin, calculatemul, calculatediv} = require("../lib/calc");

describe("Calculator", () => {
  describe("Sorter", () => {
    it("should return a function", () => {
      let athing = calc();
      // console.log(athing)

      isFunction(calc);
    });
    it("should return an added sum", () => {
      let result = calc(1, "+", 3);
      equal(result, 4);
    });
    it("should return a subtracted number", () => {
      let result = calc(3, "-", 1)
      equal(result, 2);
    });
    it("should return a multiplied number", () => {
      let result = calc(3, "*", 2)
      equal(result, 6);
    });
    it("should return a divided number", () => {
      let result = calc(9, "/", 3);
      equal(result, 3);
    });

  });


  it("should return caladd number", () => {
    let result = calculateadd();
    isNumber(result);
  });

  it("should return calmin number", () => {
    let result = calculatemin(5, 3);
    equal(result, 2);
  });

  it("should return calmul number", () => {
    let result = calculatemul(2, 2);
    equal(result, 4);
  });

  it("should return caldiv number", () => {
    let result = calculatediv(25, 5);
    equal(result, 5);
  });
});



//let result
//result.equal








// const { assert: {isNumber} } = require("chai");
// const add = require("../lib/add");
//
// describe("Add", () => {
//   it("should return a numbers", () => {
//     isNumber(add());
//   });
// });
