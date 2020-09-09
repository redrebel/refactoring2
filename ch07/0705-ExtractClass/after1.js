class Person {
  constructor() {
    this._telephoneNumber = new TelephoneNumber();
  }
  get name() {
    return this._name;
  }
  set name(arg) {
    this._name = arg;
  }
  get telephoneNumber() {
    return this._telephoneNumber.telephoneNumber;
  }
  get officeAreaCode() {
    return this._telephoneNumber._officeAreaCode;
  }
  set officeAreaCode(arg) {
    this._telephoneNumber._officeAreaCode = arg;
  }
  get officeNumber() {
    return this._telephoneNumber._officeNumber;
  }
  set officeNumber(arg) {
    this._telephoneNumber._officeNumber = arg;
  }
}

class TelephoneNumber {
  get telephoneNumber() {
    return `($(this.officeAreaCode}) ${this.officeNumber})`;
  }
  get officeAreaCode() {
    return this._officeAreaCode;
  }
  set officeAreaCode(arg) {
    this._officeAreaCode = arg;
  }
  get officeNumber() {
    return this._officeNumber;
  }
  set officeNumber(arg) {
    this._officeNumber = arg;
  }
}
