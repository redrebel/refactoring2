const { describe } = require("mocha");
const { expect } = require("chai");

const Customer_before = require("../Customer/before");
const Customer_after1 = require("../Customer/after1");
const Customer_after2 = require("../Customer/after2");

function Amount(amount) {
  this.amount = amount;
}

Amount.prototype.subtract = function (aNumber) {
  return this.amount - aNumber;
};
Amount.prototype.multiply = function (aNumber) {
  return this.amount * aNumber;
};

describe("0802 Move Field", () => {
  it("after1", () => {
    const before = new Customer_before("kevin", "0.1");
    const after = new Customer_after1("kevin", "0.1");
    const amount = new Amount(100);
    expect(before.applyDiscount(amount)).equals(after.applyDiscount(amount));
  });

  it("after2", () => {
    const before = new Customer_before("kevin", "0.1");
    const after = new Customer_after2("kevin", "0.1");
    const amount = new Amount(100);
    expect(before.applyDiscount(amount)).equals(after.applyDiscount(amount));
  });
});
