const { describe, it } = require("mocha");
const { expect } = require("chai");

const {
  Site: Site_before,
  Customer: Customer_before,
  client1: client1_before,
  client2: client2_before,
  client3: client3_before,
} = require("../Customer3/before");

const {
  Site: Site_after1,
  Customer: Customer_after1,
  client1: client1_after1,
  client2: client2_after1,
  client3: client3_after1,
} = require("../Customer3/after1");

const {
  Site: Site_after2,
  Customer: Customer_after2,
  client1: client1_after2,
  client2: client2_after2,
  client3: client3_after2,
} = require("../Customer3/after2");

describe("1005 Introduce Special Case - Customer3 - before", () => {
  const unknownCustomer = "미확인 고객";
  const knownCustomer = new Customer_before("고객", "정액제", {
    weeksDelinquentInLastYear: "10월",
  });

  it("Client1", () => {
    const site = new Site_before(unknownCustomer);
    const unknownCustomerName = client1_before(site);

    expect(unknownCustomerName).equals("거주자");

    site.customer = knownCustomer;
    const knownCustomerName = client1_before(site);

    expect(knownCustomerName).equals(knownCustomer.name);
  });

  it("Client2", () => {
    const unknownPlan = client2_before(unknownCustomer);

    expect(unknownPlan).equals("basic요금제");

    const knownPlan = client2_before(knownCustomer);

    expect(knownPlan).equals("정액제");
  });

  it("Client4", () => {
    const unknownWeeksDelinquent = client3_before(unknownCustomer);

    expect(unknownWeeksDelinquent).equals(0);

    const knownWeeksDelinquent = client3_before(knownCustomer);

    expect(knownWeeksDelinquent).equals("10월");
  });
});

describe("1005 Introduce Special Case - Customer3 - after1", () => {
  const unknownCustomer = "미확인 고객";
  const knownCustomer = new Customer_after1("고객", "정액제", {
    weeksDelinquentInLastYear: "10월",
  });

  it("Client1", () => {
    const site = new Site_after1(unknownCustomer);
    const unknownCustomerName = client1_after1(site);

    expect(unknownCustomerName).equals("거주자");

    site.customer = knownCustomer;
    const knownCustomerName = client1_after1(site);

    expect(knownCustomerName).equals(knownCustomer.name);
  });

  it("Client2", () => {
    const site = new Site_after1(unknownCustomer);
    const unknownPlan = client2_after1(site.customer);

    expect(unknownPlan).equals("basic요금제");

    site.customer = knownCustomer;
    const knownPlan = client2_after1(site.customer);

    expect(knownPlan).equals("정액제");
  });

  it("Client3", () => {
    const site = new Site_after1(unknownCustomer);
    const unknownWeeksDelinquent = client3_after1(site.customer);

    expect(unknownWeeksDelinquent).equals(0);

    site.customer = knownCustomer;
    const knownWeeksDelinquent = client3_after1(site.customer);

    expect(knownWeeksDelinquent).equals("10월");
  });
});

describe("1005 Introduce Special Case - Customer3 - after2", () => {
  const unknownCustomer = "미확인 고객";
  const knownCustomer = new Customer_after2("고객", "정액제", {
    weeksDelinquentInLastYear: "10월",
  });

  it("Client1", () => {
    const site = new Site_after2(unknownCustomer);
    const unknownCustomerName = client1_after2(site);

    expect(unknownCustomerName).equals("거주자");

    site.customer = knownCustomer;
    const knownCustomerName = client1_after2(site);

    expect(knownCustomerName).equals(knownCustomer.name);
  });

  it("Client2", () => {
    const site = new Site_after2(unknownCustomer);
    const unknownPlan = client2_after2(site);

    expect(unknownPlan).equals("basic요금제");

    site.customer = knownCustomer;
    const knownPlan = client2_after2(site);

    expect(knownPlan).equals("정액제");
  });

  it("Client3", () => {
    const site = new Site_after2(unknownCustomer);
    const unknownWeeksDelinquent = client3_after2(site);

    expect(unknownWeeksDelinquent).equals(0);

    site.customer = knownCustomer;
    const knownWeeksDelinquent = client3_after2(site);

    expect(knownWeeksDelinquent).equals("10월");
  });
});
