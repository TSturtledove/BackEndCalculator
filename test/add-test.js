const { assert: {isNumber, equal} } = require("chai");
const {addfinal} = require("../lib/add");

describe("Add", () => {
  it("should return a value", () => {
    let result = addfinal(5, 1);
    equal(result, 6);
    // console.log("result is",result);
  });
  it("should be a number", () => {
    let result = addfinal(3, 2);
    isNumber(result);
    // console.log("result is",result);
  });
});
