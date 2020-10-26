const { describe, it } = require("mocha");
const { expect } = require("chai");

const Customer_before = require("../before");
const Customer_after1 = require("../after1");
const Customer_after2 = require("../after2");

describe("1006 Introduce Assertion - before", () => {
  it("test1", () => {
    const customer = new Customer_before(0.5);
    expect(customer.applyDiscount(100)).equals(50);
  });

  it("test2", () => {
    const customer = new Customer_before(0);
    expect(customer.applyDiscount(100)).equals(100);
  });
});

describe("1006 Introduce Assertion - after1", () => {
  it("test1", () => {
    const customer = new Customer_after1(0.5);
    expect(customer.applyDiscount(100)).equals(50);
  });

  it("test2", () => {
    const customer = new Customer_after1(0);
    expect(customer.applyDiscount(100)).equals(100);
  });

  it("test3", () => {
    const customer = new Customer_after1(-0.5);
    //expect(customer.applyDiscount(100)).to.throw(AssertionError);
  });
});

describe("1006 Introduce Assertion - after2", () => {
  it("test1", () => {
    const customer = new Customer_after2();
    customer.discountRate = 0.5;
    expect(customer.applyDiscount(100)).equals(50);
  });

  it("test2", () => {
    const customer = new Customer_after2(0);
    customer.discountRate = 0;
    expect(customer.applyDiscount(100)).equals(100);
  });

  it("test3", () => {
    const customer = new Customer_after2();
    customer.discountRate = null;
    expect(customer.applyDiscount(100)).equals(100);
  });
});
