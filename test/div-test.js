const {assert:{isNumber,equal}} = require("chai");
const { divfinal } = require("../lib/div");

describe("Division", () => {
  it("should return a value from divion", () => {
    let result = divfinal(4, 2);
    equal(result, 2);
  });
  it("should return a number", () => {
    let result = divfinal(4, 2);
    isNumber(result);
  });

});
