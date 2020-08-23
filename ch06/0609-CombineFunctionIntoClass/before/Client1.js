const acquireReading = require("./Reading").acquireReading;
const baseRate = require("./Reading").baseRate;

const aReading = acquireReading();
const baseCharge = baseRate(aReading.month, aReading.year) * aReading.quantity;

module.exports.baseCharge = baseCharge;
