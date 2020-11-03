const thermostat = { selectedTemperature: 26, currentTemperature: 22 };
function setThermostat(currTemp, newTemp) {
  thermostat.currentTemperature = currTemp;
  thermostat.selectedTemperature = newTemp;
}

class HeatingPlan {
  constructor(min, max) {
    this._max = max;
    this._min = min;
  }

  targetTemperature(selectedTemperature) {
    if (selectedTemperature > this._max) return this._max;
    else if (selectedTemperature < this._min) return this._min;
    else return selectedTemperature;
  }
}

class Caller {
  constructor() {
    this._action = "off";
  }

  get action() {
    return this._action;
  }

  setTemperature(thePlan) {
    if (
      thePlan.targetTemperature(thermostat.selectedTemperature) >
      thermostat.currentTemperature
    )
      this.setToHeat();
    else if (
      thePlan.targetTemperature(thermostat.selectedTemperature) <
      thermostat.currentTemperature
    )
      this.setToCool();
    else this.setOff();
  }

  setToHeat() {
    this._action = "heating";
  }

  setToCool() {
    this._action = "cooling";
  }

  setOff() {
    this._action = "off";
  }
}

module.exports = { setThermostat, HeatingPlan, Caller };
