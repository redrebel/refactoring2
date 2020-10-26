const { assert } = require("chai");

class Customer {
  constructor(discountRate) {
    this._discountRate = discountRate;
  }

  set discountRate(aNumber) {
    assert(null === aNumber || aNumber >= 0);
    this._discountRate = aNumber;
  }

  get discountRate() {
    return this._discountRate;
  }

  applyDiscount(aNumber) {
    return aNumber - this.discountRate * aNumber;
  }
}

module.exports = Customer;
