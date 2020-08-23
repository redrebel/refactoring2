module.exports.Reading = class Reading {
  constructor(data) {
    this._customer = data.customer;
    this._quantity = data.quantity;
    this._month = data.month;
    this._year = data.year;
  }

  get customer() {
    return this._customer;
  }
  get quantity() {
    return this._quantity;
  }
  get month() {
    return this._month;
  }
  get year() {
    return this._year;
  }
  get baseCharge() {
    return baseRate(this.month, this.year) * this.quantity;
  }
};

const reading = { customer: "ivan", quantity: 10, month: 5, year: 2017 };

module.exports.acquireReading = function () {
  return reading;
};

function baseRate(month, year) {
  return 2;
}
