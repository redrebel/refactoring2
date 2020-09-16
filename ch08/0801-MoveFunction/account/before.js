class Account {
  constructor(daysOverdrawn, isPremium) {
    this._dayOverdrawn = daysOverdrawn;
    this._isPremium = isPremium;
  }

  get daysOverdrawn() {
    return this._dayOverdrawn;
  }

  get bankCharge() {
    // 은행 이자 계산
    let result = 4.5;
    if (this._dayOverdrawn > 0) result += this.overdraftCharge;
    return result;
  }

  get overdraftCharge() {
    // 초과 인출 이자 계산
    if (this._isPremium) {
      const baseCharge = 10;
      if (this.daysOverdrawn <= 7) return baseCharge;
      else return baseCharge + (this.daysOverdrawn - 7) * 0.85;
    } else return this.daysOverdrawn * 1.75;
  }
}

module.exports = Account;
