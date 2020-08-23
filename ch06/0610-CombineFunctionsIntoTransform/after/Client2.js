const acquireReading = require("./Reading").acquireReading;
const enrichReading = require("./Reading").enrichReading;

const rawReading = acquireReading();
const aReading = enrichReading(rawReading);
const taxableCharge = aReading.taxableCharge;

module.exports.taxableCharge = taxableCharge;
