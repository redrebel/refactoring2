const { describe } = require("mocha");
const { expect } = require("chai");

describe("1206 Replace Type Code with Subclasses - Employee1", () => {
  it("engineer - before", () => {
    const Employee = require("../Employee1/before");
    const engineer = new Employee("jobs", "engineer");
    expect(engineer.toString()).equals("jobs (engineer)");
  });

  it("engineer - after1", () => {
    const createEmployee = require("../Employee1/after1");
    const engineer = createEmployee("jobs", "engineer");
    expect(engineer.toString()).equals("jobs (engineer)");
  });
});

describe("1206 Replace Type Code with Subclasses - Employee2", () => {
  it("engineer - before", () => {
    const Employee = require("../Employee2/before");
    const engineer = new Employee("jobs", "engineer");
    expect(engineer.toString()).equals("jobs (Engineer)");
  });

  it("engineer - after1", () => {
    const Employee = require("../Employee2/after1");
    const engineer = new Employee("jobs", "engineer");
    expect(engineer.toString()).equals("jobs (Engineer)");
  });
});
