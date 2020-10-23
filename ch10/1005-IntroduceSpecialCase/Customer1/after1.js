class Site {
  constructor(customer) {
    this._customer = customer;
  }
  set customer(arg) {
    this._customer = arg;
  }
  get customer() {
    return this._customer === "미확인 고객"
      ? new UnknownCustomer()
      : this._customer;
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

  get isUnknown() {
    return false;
  }
}

class UnknownCustomer {
  get name() {
    return "거주자";
  }
  get isUnknown() {
    return true;
  }
}

function isUnknown(arg) {
  if (!(arg instanceof Customer || arg instanceof UnknownCustomer))
    throw new Error(`잘못된 값과 비교: <${arg}>`);
  return arg.isUnknown;
}

function client1(site) {
  const aCustomer = site.customer;
  // ... 수많은 코드
  let customerName;
  customerName = aCustomer.name;

  return customerName;
}

function client2(aCustomer) {
  const plan = isUnknown(aCustomer) ? "basic요금제" : aCustomer.billingPlan;
  return plan;
}

function client3(aCustomer, newPlan) {
  if (!isUnknown(aCustomer)) aCustomer.billingPlan = newPlan;
  return aCustomer;
}

function client4(aCustomer) {
  const weeksDelinquent = isUnknown(aCustomer)
    ? 0
    : aCustomer.paymentHistory.weeksDelinquentInLastYear;

  return weeksDelinquent;
}
module.exports = { Site, Customer, client1, client2, client3, client4 };
