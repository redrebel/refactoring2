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

  get billingPlan(){return "basic요금제"}
  set billingPlan(){ /* 무시한다 */}

  get paymentHistory(){
    return new NullPaymentHistory();
  }
  get isUnknown() {
    return true;
  }
}

class NullPaymentHistory{
  get weeksDelinquentInLastYear(){return 0;}
}


function client1(site) {
  const aCustomer = site.customer;
  // ... 수많은 코드
  let customerName;
  customerName = aCustomer.name;

  return customerName;
}

function client2(aCustomer) {
  const plan = aCustomer.billingPlan;
  return plan;
}

function client3(aCustomer, newPlan) {
  aCustomer.billingPlan = newPlan;
  return aCustomer;
}

function client4(aCustomer) {
  const weeksDelinquent = aCustomer.paymentHistory.weeksDelinquentInLastYear;

  return weeksDelinquent;
}
module.exports = { Site, Customer, client1, client2, client3, client4 };
