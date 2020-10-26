const { assert } = require("chai");

class Customer {
  constructor(discountRate) {
    this.discountRate = discountRate;
  }

  applyDiscount(aNumber) {
    if (!this.discountRate) return aNumber;
    else {
      assert(this.discountRate >= 0);
      return aNumber - this.discountRate * aNumber;
    }
  }
}

module.exports = Customer;
