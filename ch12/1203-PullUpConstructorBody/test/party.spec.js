const { describe } = require("mocha");
const { expect } = require("chai");

const name = "이정근";

describe("1203 Pull Up Constructor Body, Party - before", () => {
  const { Employee, Department } = require("../Party/before");

  it("Employee", () => {
    const employee = new Employee(name, "red", 100);
    expect(employee._name).equals(name);
  });

  it("Department", () => {
    const department = new Department(name, "CEO");
    expect(department._name).equals(name);
  });
});

describe("1203 Pull Up Constructor Body, Party - after1", () => {
  const { Employee, Department } = require("../Party/after1");

  it("Employee", () => {
    const employee = new Employee(name, "red", 100);
    expect(employee._name).equals(name);
  });

  it("Department", () => {
    const department = new Department(name, "CEO");
    expect(department._name).equals(name);
  });
});
