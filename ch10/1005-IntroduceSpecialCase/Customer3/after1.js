const _ = require("lodash");

class Site {
  constructor(customer) {
    this._customer = customer;
  }
  set customer(arg) {
    this._customer = arg;
  }
  get customer() {
    return this._customer;
  }
}

class Customer {
  constructor(name, billingPlan, paymentHistory) {
    this._name = name;
    this._billingPlan = billingPlan;
    this._paymentHistory = paymentHistory;
  }
  // 고객 이름
  get name() {
    return this._name;
  }

  // 요금제
  get billingPlan() {
    return this._billingPlan;
  }

  set billingPlan(arg) {
    this._billingPlan = arg;
  }

  // 납부 이력
  get paymentHistory() {
    return this._paymentHistory;
  }
}

function isUnknown(aCustomer) {
  if (aCustomer === "미확인 고객") return true;
  else return aCustomer.isUnknown;
}

function client1(rawSite) {
  const site = enrichSite(rawSite);
  const aCustomer = site.customer;
  // ... 수많은 코드
  let customerName;
  //console.log(aCustomer);
  if (isUnknown(aCustomer)) customerName = "거주자";
  else customerName = aCustomer.name;

  return customerName;

  function enrichSite(aSite) {
    const result = _.cloneDeep(aSite);
    const unknownCustomer = {
      isUnknown: true,
    };

    if (isUnknown(result.customer)) result.customer = unknownCustomer;
    else result.customer.isUnknown = false;
    return result;
  }
}

function client2(aCustomer) {
  const plan = isUnknown(aCustomer) ? "basic요금제" : aCustomer.billingPlan;
  return plan;
}

function client3(aCustomer) {
  const weeksDelinquent = isUnknown(aCustomer)
    ? 0
    : aCustomer.paymentHistory.weeksDelinquentInLastYear;

  return weeksDelinquent;
}
module.exports = { Site, Customer, client1, client2, client3 };
