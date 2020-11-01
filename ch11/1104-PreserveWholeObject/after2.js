class HeatingPlan {
  _temperatureRange = { low: 0, high: 0 };
  constructor(low, high) {
    this._temperatureRange.low = low;
    this._temperatureRange.high = high;
  }

  withinRange(bottom, top) {
    return (
      bottom >= this._temperatureRange.low && top <= this._temperatureRange.high
    );
  }

  xxNewwithinRange(tempRange) {
    const low = tempRange.low;
    const high = tempRange.high;
    const isWithinRange = this.withinRange(low, high);
    return isWithinRange;
  }
}

function caller(aRoom) {
  const aPlan = new HeatingPlan(10, 20);
  const tempRange = aRoom.daysTempRange;
  const isWithinRange = aPlan.xxNewwithinRange(tempRange);
  if (!isWithinRange) return "방 온도가 지정 범위를 벗어났습니다.";

  return "정상입니다.";
}

module.exports = caller;
