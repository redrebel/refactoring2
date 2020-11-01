const { describe } = require("mocha");
const { expect } = require("chai");

describe("1105 Replace Parameter with Query - before", () => {
  const Order = require("../before");
  it("order1", () => {
    const order1 = new Order(50, 100);
    expect(order1.finalPrice).equals(4750);
  });

  it("order2", () => {
    const order2 = new Order(500, 100);
    expect(order2.finalPrice).equals(45000);
  });
});

describe("1105 Replace Parameter with Query - after1", () => {
  const Order = require("../after1");
  it("order1", () => {
    const order1 = new Order(50, 100);
    expect(order1.finalPrice).equals(4750);
  });

  it("order2", () => {
    const order2 = new Order(500, 100);
    expect(order2.finalPrice).equals(45000);
  });
});
