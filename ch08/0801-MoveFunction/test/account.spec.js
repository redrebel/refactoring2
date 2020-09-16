const { describe, it } = require("mocha");
const { expect } = require("chai");

const account_before = require("../account/before");
const account_after = require("../account/after1");

describe("0801 MoveFunction Account", () => {
  it("test", () => {
    const before = new account_before(10, true);
    const after = new account_after(10, true);
    expect(before.bankCharge).equals(after.bankCharge);
  });
});
