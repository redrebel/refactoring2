const { describe } = require("mocha");
const { expect } = require("chai");

describe("1106 Replace Query with Parameter - before", () => {
  const { setThermostat, HeatingPlan, Caller } = require("../before");
  const caller = new Caller();
  const heatingPlan = new HeatingPlan(22, 35);

  it("heat", () => {
    setThermostat(20, 23);
    caller.setTemperature(heatingPlan);
    expect(caller.action).equals("heating");
  });

  it("cool", () => {
    setThermostat(25, 23);
    caller.setTemperature(heatingPlan);
    expect(caller.action).equals("cooling");
  });

  it("off", () => {
    setThermostat(23, 23);
    caller.setTemperature(heatingPlan);
    expect(caller.action).equals("off");
  });
});

describe("1106 Replace Query with Parameter - after1", () => {
  const { setThermostat, HeatingPlan, Caller } = require("../after1");
  const caller = new Caller();
  const heatingPlan = new HeatingPlan(22, 35);

  it("heat", () => {
    setThermostat(20, 23);
    caller.setTemperature(heatingPlan);
    expect(caller.action).equals("heating");
  });

  it("cool", () => {
    setThermostat(25, 23);
    caller.setTemperature(heatingPlan);
    expect(caller.action).equals("cooling");
  });

  it("off", () => {
    setThermostat(23, 23);
    caller.setTemperature(heatingPlan);
    expect(caller.action).equals("off");
  });
});

describe("1106 Replace Query with Parameter - after2", () => {
  const { setThermostat, HeatingPlan, Caller } = require("../after2");
  const caller = new Caller();
  const heatingPlan = new HeatingPlan(22, 35);

  it("heat", () => {
    setThermostat(20, 23);
    caller.setTemperature(heatingPlan);
    expect(caller.action).equals("heating");
  });

  it("cool", () => {
    setThermostat(25, 23);
    caller.setTemperature(heatingPlan);
    expect(caller.action).equals("cooling");
  });

  it("off", () => {
    setThermostat(23, 23);
    caller.setTemperature(heatingPlan);
    expect(caller.action).equals("off");
  });
});
