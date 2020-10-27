function findMiscreant(people) {
  // 생략(중요하지 않은 코드)
  let alert = "No miscreant";
  checkForMiscreants(people);
  // 생략
  return alert;

  function sendAlert() {
    alert = "There is a miscreant";
  }

  function checkForMiscreants(people) {
    if (people.some((p) => ["조커", "사루만"].includes(p))) sendAlert();
  }
}

module.exports = findMiscreant;
