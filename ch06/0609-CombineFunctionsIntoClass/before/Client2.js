const acquireReading = require("./Reading").acquireReading;
const baseRate = require("./Reading").baseRate;

const aReading = acquireReading();
const base = baseRate(aReading.month, aReading.year) * aReading.quantity;
const taxableCharge = Math.max(0, base - taxThreshold(aReading.year));

function taxThreshold() {
  return 30;
}

module.exports.taxableCharge = taxableCharge;
