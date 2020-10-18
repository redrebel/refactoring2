function disabilityAmount(anEmployee) {
  if (anEmployee.seniority < 2 
    || anEmployee.monthDisabled > 12 
    || anEmployee.isPartTime) return 0;
  // 장애수당 계산
}

module.exports = disabilityAmount;