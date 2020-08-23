const acquireReading = require("./Reading").acquireReading;
const Reading = require("./Reading").Reading;

const rawReading = acquireReading();
const aReading = new Reading(rawReading);
const basicChargeAmount = aReading.baseCharge;

module.exports.basicChargeAmount = basicChargeAmount;
