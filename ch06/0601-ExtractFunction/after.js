const Clock = require("../Clock");

function printOwing(invoice) {
  let outstanding = 0;

  printBanner();
  // 미해결 채무(outstanding)를 계산한다.
  for (const o of invoice.orders) {
    outstanding += o.amount;
  }

  // 마감일(dueData)을 기록한다.
  const today = Clock.today;

  invoice.dueDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 30
  );

  // 세부 사항을 출력한다.
  printDetails(invoice, outstanding);
}

function printBanner() {
  console.log("*****************");
  console.log("*** 고객 채무 ***");
  console.log("*****************");
}

function printDetails(invoice, outstanding) {
  //console.log(invoice);
  // 세부 사항을 출력한다.
  console.log(`고객명: ${invoice.customer}`);
  console.log(`채무액: ${outstanding}`);
  console.log(`마감일: ${invoice.dueDate.toLocaleDateString()}`);
}
module.exports = printOwing;