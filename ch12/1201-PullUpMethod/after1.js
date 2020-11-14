class Party {
  constructor(monthlyCost) {
    this.monthlyCost = monthlyCost;
  }

  get annualCost() {
    return this.monthlyCost * 12;
  }
}

class Employee extends Party {}

class Department extends Party {}

module.exports = { Employee, Department };
