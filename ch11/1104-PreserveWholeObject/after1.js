class HeatingPlan {
  _temperatureRange = { low: 0, high: 0 };
  constructor(low, high) {
    this._temperatureRange.low = low;
    this._temperatureRange.high = high;
  }

  withinRange(aNumberRange) {
    return (
      aNumberRange.low >= this._temperatureRange.low &&
      aNumberRange.high <= this._temperatureRange.high
    );
  }
}

function caller(aRoom) {
  const aPlan = new HeatingPlan(10, 20);
  if (!aPlan.withinRange(aRoom.daysTempRange))
    return "방 온도가 지정 범위를 벗어났습니다.";

  return "정상입니다.";
}

module.exports = caller;
