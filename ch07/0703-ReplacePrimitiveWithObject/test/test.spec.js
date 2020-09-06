const { describe } = require("mocha");
const { expect } = require("chai");
const Order_before = require("../before1");
const Order_after1 = require("../after1");
const Order_after2 = require("../after2");
const { Order: Order_after3, Priority } = require("../after3");

describe("0703-Order", function () {
  it("priority-before", function () {
    const orders = [];
    orders.push(new Order_before({ priority: "high" }));
    orders.push(new Order_before({ priority: "low" }));
    orders.push(new Order_before({ priority: "rush" }));
    orders.push(new Order_before({ priority: "high" }));
    // console.log(orders);
    const highPriorityCount = orders.filter(
      (o) => "high" === o.priority || "rush" === o.priority
    ).length;
    expect(highPriorityCount).equals(3);
  });

  it("priority-after1", function () {
    const orders = [];
    orders.push(new Order_after1({ priority: "high" }));
    orders.push(new Order_after1({ priority: "low" }));
    orders.push(new Order_after1({ priority: "rush" }));
    orders.push(new Order_after1({ priority: "high" }));
    // console.log(orders);
    const highPriorityCount = orders.filter(
      (o) => "high" === o.priority || "rush" === o.priority
    ).length;
    expect(highPriorityCount).equals(3);
  });

  it("priority-after2", function () {
    const orders = [];
    orders.push(new Order_after2({ priority: "high" }));
    orders.push(new Order_after2({ priority: "low" }));
    orders.push(new Order_after2({ priority: "rush" }));
    orders.push(new Order_after2({ priority: "high" }));
    // console.log(orders);
    const highPriorityCount = orders.filter(
      (o) => "high" === o.priorityString || "rush" === o.priorityString
    ).length;
    expect(highPriorityCount).equals(3);
  });

  it("priority-after3", function () {
    const orders = [];
    orders.push(new Order_after3({ priority: "high" }));
    orders.push(new Order_after3({ priority: "low" }));
    orders.push(new Order_after3({ priority: "rush" }));
    orders.push(new Order_after3({ priority: "high" }));
    // console.log(orders);
    const highPriorityCount = orders.filter(
      (o) =>
        "high" === o.priority.toString() || "rush" === o.priority.toString()
    ).length;
    expect(highPriorityCount).equals(3);
  });

  it("priority-after3-1", function () {
    const orders = [];
    orders.push(new Order_after3({ priority: new Priority("high") }));
    orders.push(new Order_after3({ priority: new Priority("low") }));
    orders.push(new Order_after3({ priority: new Priority("rush") }));
    orders.push(new Order_after3({ priority: new Priority("high") }));
    // console.log(orders);
    const highPriorityCount = orders.filter((o) =>
      o.priority.higherThan(new Priority("normal"))
    ).length;
    expect(highPriorityCount).equals(3);
  });
});
