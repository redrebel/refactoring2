const acquireReading = require("./Reading").acquireReading;
const enrichReading = require("./Reading").enrichReading;

const rawReading = acquireReading();
const aReading = enrichReading(rawReading);
const baseCharge = aReading.baseCharge;

module.exports.baseCharge = baseCharge;
