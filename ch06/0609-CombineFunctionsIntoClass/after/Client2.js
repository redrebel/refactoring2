const acquireReading = require("./Reading").acquireReading;
const Reading = require("./Reading").Reading;

const rawReading = acquireReading();
const aReading = new Reading(rawReading);
const taxableCharge = taxableChargeFn(aReading);

function taxableChargeFn(aReading) {
  return Math.max(0, aReading.baseCharge - taxThreshold(aReading.year));
}

function taxThreshold() {
  return 30;
}

module.exports.taxableCharge = taxableCharge;
