const acquireReading = require("./Reading").acquireReading;
const enrichReading = require("./Reading").enrichReading;

const rawReading = acquireReading();
const aReading = enrichReading(rawReading);
const basicChargeAmount = aReading.baseCharge;

module.exports.basicChargeAmount = basicChargeAmount;
