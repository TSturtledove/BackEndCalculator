const { assert: {isNumber, equal} } = require("chai");
const { mulfinal } = require("../lib/mul");

describe("Multiple", () => {
  it("should return a value from multiplcation", () => {
    let result = mulfinal(2, 2);
    equal(result, 4);
  });
  it("should return a number", () => {
    let result = mulfinal(4, 6);
    isNumber(result);
  });
});
