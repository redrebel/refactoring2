class Employee {
  constrictor(name) {
    this._name = name;
  }
  get isPrivileged() {
    return true;
  }
  assignCar() {
    return;
  }

  finishConstruction() {
    if (this.isPrivileged) this.assignCar();
  }
}

class Manager extends Employee {
  constructor(name, grade) {
    super(name);
    this._grade = grade;
    this.finishConstruction();
  }

  get isPrivileged() {
    return this._grade > 4;
  }
}

module.exports = Manager;
