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
    if (this._dayOverdrawn > 0)
      result += this.type.overdraftCharge(this.daysOverdrawn);
    return result;
  }
}

class AccountType {
  overdraftCharge(daysOverdrawn) {
    // 초과 인출 이자 계산
    if (this.isPremium) {
      const baseCharge = 10;
      if (daysOverdrawn <= 7) return baseCharge;
      else return baseCharge + (daysOverdrawn - 7) * 0.85;
    } else return daysOverdrawn * 1.75;
  }
}

module.exports = Account;
