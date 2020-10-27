function findMiscreant(people) {
  let alert = "No miscreant";
  let found = false;
  for (const p of people) {
    if (!found) {
      if (p === "조커") {
        sendAlert();
        found = true;
      }
      if (p === "사루만") {
        sendAlert();
        found = true;
      }
    }
  }
  return alert;

  function sendAlert() {
    alert = "There is a miscreant";
  }
}

module.exports = findMiscreant;
