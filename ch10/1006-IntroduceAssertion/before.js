class Customer {
  constructor(discountRate) {
    this.discountRate = discountRate;
  }

  applyDiscount(aNumber) {
    return this.discountRate ? aNumber - this.discountRate * aNumber : aNumber;
  }
}

module.exports = Customer;
