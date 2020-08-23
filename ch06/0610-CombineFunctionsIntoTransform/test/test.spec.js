const { describe } = require("mocha");
const { expect } = require("chai");

const beforeClient1 = require("../before/Client1");
const beforeClient2 = require("../before/Client2");
const beforeClient3 = require("../before/Client3");
const afterClient1 = require("../after/Client1");
const afterClient2 = require("../after/Client2");
const afterClient3 = require("../after/Client3");

describe("0610 Combine Functions Into Transform", function () {
  it("test Client1", function () {
    expect(afterClient1.baseCharge).equal(beforeClient1.baseCharge);
  });

  it("test Client2", function () {
    expect(afterClient2.taxableCharge).equal(beforeClient2.taxableCharge);
  });

  it("test Client3", function () {
    expect(afterClient3.basicChargeAmount).equal(
      beforeClient3.basicChargeAmount
    );
  });
});
