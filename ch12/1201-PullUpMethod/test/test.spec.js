const { describe } = require("mocha");
const { expect } = require("chai");

describe("1201 Pull Up Method - before", () => {
  it("Employee", () => {
    const Employee = require("../before").Employee;
    const employee = new Employee(10);
    expect(employee.annualCost).equals(120);
  });

  it("Department", () => {
    const Department = require("../before").Department;
    const department = new Department(10);
    expect(department.totalAnnualCost).equals(120);
  });
});

describe("1201 Pull Up Method - after1", () => {
  it("Employee", () => {
    const Employee = require("../after1").Employee;
    const employee = new Employee(10);
    expect(employee.annualCost).equals(120);
  });

  it("Department", () => {
    const Department = require("../after1").Department;
    const department = new Department(10);
    expect(department.annualCost).equals(120);
  });
});
