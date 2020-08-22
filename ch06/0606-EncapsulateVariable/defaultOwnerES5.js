// ES6 code

let defaultOwnerData = { firstName: "마틴", lastName: "파울러" };

module.exports.defaultOwner = function defaultOwner() {
  return new Person(defaultOwnerData);
};

module.exports.setDefaultOwner = function setDefaultOwner(arg) {
  defaultOwnerData = arg;
};

class Person {
  constructor(data) {
    this._lastName = data.lastName;
    this._firstName = data.firstName;
  }

  get lastName() {
    return this._lastName;
  }
  get firstName() {
    return this._firstName;
  }
}
