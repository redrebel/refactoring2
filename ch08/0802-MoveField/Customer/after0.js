class Customer {
  constructor(name, discountRate) {
    this._name = name;
    this._setDiscountRate(discountRate);
    this._contract = new CustomerContract(dateToday());
  }

  get discountRate() {
    return this._discountRate;
  }

  _setDiscountRate(aNumber) {
    this._discountRate = aNumber;
  }

  becomePreferred() {
    this._setDiscountRate((this._discountRate += 0.03));
  }
  applyDiscount(amount) {
    return amount.subtract(amount.multiply(this._discountRate));
    //return amount - amount * this._discountRate;
  }
}

class CustomerContract {
  constructor(startDate) {
    this._startDate = startDate;
  }
}

function dateToday() {
  return new Date();
}

function Amount(amount) {
  this.amount = amount;
}

Amount.prototype.subtract = function (aNumber) {
  return this.amount - aNumber;
};
Amount.prototype.multiply = function (aNumber) {
  return this.amount * aNumber;
};

var amount = new Amount(10);
console.log(amount);

const before = new Customer("kevin", "0.1");

console.log(before.applyDiscount(amount));

module.exports = Customer;
