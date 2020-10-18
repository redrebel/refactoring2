function payAmount(employee){
  let result;
  if(employee.isSeparated){ // 퇴사한 직원인가?
    result = {amount: 0, reasonCode: "SEP"};
  }
  else {
    if(employee.isRetired){ // 은퇴한 직원인가?
      result = {amount: 0, reason: "RET"};
    }
    else {
      // 급여 계산 로직
      //lorem.ipsum(dolor.sitAmet);
      //consectetur(adipiscing).elit();
      result = someFinalComputation();
    }
  }
  return result;
}

function someFinalComputation(){
  return {amount: 100, reason: "SCC"};
}

module.exports = payAmount;