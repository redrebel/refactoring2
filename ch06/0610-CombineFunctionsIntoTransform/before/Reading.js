const reading = { customer: "ivan", quantity: 10, month: 5, year: 2017 };

module.exports.acquireReading = function () {
  return reading;
};

module.exports.baseRate = function (month, year) {
  return 2;
};
