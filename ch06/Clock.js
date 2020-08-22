class Clock {
  constructor(fullYear, month, date) {
    this.fullYear = fullYear;
    this.month = month;
    this.date = date;
  }
  static today = new Clock(2020, 8, 23);
  getFullYear() {
    return this.fullYear;
  }
  getMonth() {
    return this.month;
  }
  getDate() {
    return this.date;
  }
}

module.exports = Clock;
