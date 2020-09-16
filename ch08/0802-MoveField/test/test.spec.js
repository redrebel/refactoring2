const { describe } = require("mocha");
const { expect } = require("chai");

const Customer_before = require("../before");
const Customer_after1 = require("../after1");

describe("0802 Move Field", () => {
  it("after1", () => {
    const before = new Customer_before("kevin", "0.1");
    const after = new Customer_after1("kevin", "0.1");
    const amount = 100;
    expect(before.applyDiscount(amount)).equals(after.applyDiscount(amount));
  });
});
