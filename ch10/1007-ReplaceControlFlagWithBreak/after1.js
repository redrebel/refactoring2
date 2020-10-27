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
    for (const p of people) {
      if (p === "조커") {
        sendAlert();
        return;
      }
      if (p === "사루만") {
        sendAlert();
        return;
      }
    }
  }
}

module.exports = findMiscreant;
