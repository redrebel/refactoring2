class Employee {
  constructor(name, typeCode) {
    this._name = name;
    this._typeCode = typeCode;
  }

  get name() {
    return this._name;
  }
  get type() {
    return Employee.legalTypeCodes[this._typeCode];
  }
  static get legalTypeCodes() {
    return { E: "Engineer", M: "Manager", S: "Salesperson" };
  }
}

function caller1(document) {
  candidate = new Employee(document.name, document.empType);
}

function caller2(document) {
  const leadEngineer = new Employee(document.leadEngineer, "E");
}
