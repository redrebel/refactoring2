const { describe } = require("mocha");
const { expect } = require("chai");

describe("1208 Extract Superclass", () => {
  it("before", () => {
    const { Employee, Department } = require("../before");
    const kevin = new Employee("kevin", "1", 1000);
    const jane = new Employee("jane", "2", 800);
    const john = new Employee("john", "3", 600);
    const staff = [kevin, jane, john];
    const department = new Department("engineer", staff);
    expect(kevin.annualCost).equals(1000 * 12);
    expect(department.totalAnnualCost).equals(
      kevin.annualCost + jane.annualCost + john.annualCost
    );
  });

  it("after1", () => {
    const { Employee, Department } = require("../after1");
    const kevin = new Employee("kevin", "1", 1000);
    const jane = new Employee("jane", "2", 800);
    const john = new Employee("john", "3", 600);
    const staff = [kevin, jane, john];
    const department = new Department("engineer", staff);
    expect(kevin.annualCost).equals(1000 * 12);
    expect(department.totalAnnualCost).equals(
      kevin.annualCost + jane.annualCost + john.annualCost
    );
  });

  it("after2", () => {
    const { Employee, Department } = require("../after2");
    const kevin = new Employee("kevin", "1", 1000);
    const jane = new Employee("jane", "2", 800);
    const john = new Employee("john", "3", 600);
    const staff = [kevin, jane, john];
    const department = new Department("engineer", staff);
    expect(kevin.annualCost).equals(1000 * 12);
    expect(department.annualCost).equals(
      kevin.annualCost + jane.annualCost + john.annualCost
    );
  });
});
