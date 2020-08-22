const { describe } = require("mocha");
const { expect } = require("chai");
const before = require("../before");
const after = require("../after");

describe("rating", function () {
  it("5", function () {
    const aDriver = { numberOfLateDeliveries: 5 };
    expect(before.rating(aDriver)).equal(after.rating(aDriver));
  });
  it("6", function () {
    const aDriver = { numberOfLateDeliveries: 5 };
    expect(before.rating(aDriver)).equal(after.rating(aDriver));
  });
});

describe("reportLines", function () {
  const aCustomer = { name: "이정근", location: "경기도부천" };
  it("test", function () {
    console.log(aCustomer);
    expect(before.reportLines(aCustomer)).to.deep.equal(
      after.reportLines(aCustomer)
    );
  });
});
