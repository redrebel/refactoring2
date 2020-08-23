const acquireReading = require("./Reading").acquireReading;
const baseRate = require("./Reading").baseRate;

const aReading = acquireReading();
const basicChargeAmount = calculateBaseCharge(aReading);

function calculateBaseCharge(aReading) {
  return baseRate(aReading.month, aReading.year) * aReading.quantity;
}

module.exports.basicChargeAmount = basicChargeAmount;
