function payAmount(employee){
  // 퇴사한 직원인가?
  if(employee.isSeparated) return {amount: 0, reasonCode: "SEP"};
  
  // 은퇴한 직원인가?
  if(employee.isRetired) return {amount: 0, reason: "RET"};
  
  // 급여 계산 로직
  //lorem.ipsum(dolor.sitAmet);
  //consectetur(adipiscing).elit();
  return someFinalComputation();
}

function someFinalComputation(){
  return {amount: 100, reason: "SCC"};
}

module.exports = payAmount;