const { describe } = require("mocha");
const { expect } = require("chai");

describe("1110 Replace Command with Function - before", () => {
  const caller = require("../before");
  const customer = { baseRate: 1 };
  const usage = 10;
  const provider = { connectionCharge: 2 };

  it("caller", () => {
    expect(caller(customer, usage, provider)).equals(12);
  });
});

describe("1110 Replace Command with Function - after1", () => {
  const caller = require("../after1");
  const customer = { baseRate: 1 };
  const usage = 10;
  const provider = { connectionCharge: 2 };

  it("caller", () => {
    expect(caller(customer, usage, provider)).equals(12);
  });
});
