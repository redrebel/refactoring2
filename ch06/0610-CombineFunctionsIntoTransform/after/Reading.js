const _ = require("lodash");

module.exports.enrichReading = function (original) {
  const result = _.cloneDeep(original);
  //const result = Object.assign({}, original); // 이래도 같지 않나?
  result.baseCharge = calculateBaseCharge(result);
  result.taxableCharge = Math.max(
    0,
    result.baseCharge - taxThreshold(result.year)
  );
  return result;
};

function taxThreshold() {
  return 30;
}

function calculateBaseCharge(aReading) {
  return baseRate(aReading.month, aReading.year) * aReading.quantity;
}

const reading = { customer: "ivan", quantity: 10, month: 5, year: 2017 };

module.exports.acquireReading = function () {
  return reading;
};

function baseRate(month, year) {
  return 2;
}
