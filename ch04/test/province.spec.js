const { Province, sampleProvinceData } = require("../Province");

// var assert = require("assert");
const { assert } = require("chai");
//var assert = chai.assert;
describe("province", function () {
  it("shortfall", function () {
    const asia = new Province(sampleProvinceData());
    assert.equal(asia.shortfall, 5);
  });
});
