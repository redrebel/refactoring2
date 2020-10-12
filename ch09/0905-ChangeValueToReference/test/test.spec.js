const { describe, it } = require("mocha");
const { expect } = require("chai");

const Order_before = require("../before");
const Order_after1 = require("../after1");

describe("0905 Change Value to Reference", () => {
  it("after1", () => {
    const data = { number: 100, customer: "red" };
    const order_before = new Order_before(data);
    const order_after1 = new Order_after1(data);
    expect(order_before.customer.id).equal(order_after1.customer.id);
  });
});
