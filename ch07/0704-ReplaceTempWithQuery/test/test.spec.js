const { describe } = require("mocha");
const { expect } = require("chai");
const Order_before = require("../before");
const Order_after1 = require("../after1");
const Order_after2 = require("../after2");

describe("0704-ReplaceTempWithQuery", function () {
  it("Order_before", function () {
    const order = new Order_before(2, { price: 100 });
    expect(order.price).equals(200 * 0.98);

    const order2 = new Order_before(10, { price: 1000 });
    expect(order2.price).equals(10000 * 0.95);
  });

  it("Order_after1", function () {
    const order = new Order_after1(2, { price: 100 });
    expect(order.price).equals(200 * 0.98);

    const order2 = new Order_after1(10, { price: 1000 });
    expect(order2.price).equals(10000 * 0.95);
  });

  it("Order_after2", function () {
    const order = new Order_after2(2, { price: 100 });
    expect(order.price).equals(200 * 0.98);

    const order2 = new Order_after2(10, { price: 1000 });
    expect(order2.price).equals(10000 * 0.95);
  });
});
