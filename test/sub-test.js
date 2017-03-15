const { assert: {isNumber, equal} } = require("chai");
const {subfinal} = require("../lib/sub");

describe("Sub", () => {
  it("should return a value from subtraction module", () => {
    let result = subfinal(5, 1);
    equal(result, 4);
    // console.log("result is",result);
  });
  it("should be a number", () => {
    let result = subfinal(3, 2);
    isNumber(result);
    // console.log("result is",result);
  });
});
