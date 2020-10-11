class ProductPlan {
  constructor(production) {
    this._initialProduction = production;
    this._adjustments = [];
  }
  get production() {
    return this._initialProduction + this.calculatedProduction;
  }

  get calculatedProduction() {
    return this._adjustments.reduce((sum, a) => sum + a.amount, 0);
  }

  applyAdjustment(anAdjustment) {
    this._adjustments.push(anAdjustment);
  }
}

module.exports = ProductPlan;
