const { describe } = require("mocha");
const { assert, expect } = require("chai");

const PriceOrder_before = require("../PriceOrder/before");
const PriceOrder_after = require("../PriceOrder/after");

describe("SplitPhase", function () {
  it("PriceOrder", function () {
    const product = { basePrice: 100, discountThreshold: 20, discountRate: 10 };
    const quantity = 2;
    const shippingMethod = {
      discountThreshold: 5,
      discountedFee: 10,
      feePerCase: 5,
    };
    const price_before = PriceOrder_before(product, quantity, shippingMethod);
    const price_after = PriceOrder_after(product, quantity, shippingMethod);

    expect(price_after).equal(price_before);
  });
});
