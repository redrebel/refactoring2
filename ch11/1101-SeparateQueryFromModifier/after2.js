function alertForMiscreant(people) {
  let alarm = "No Miscreant";
  if (findMiscreant(people) !== "") setOffAlarms();

  return alarm;
  function setOffAlarms() {
    alarm = "There is a miscreant";
    return;
  }
}

function findMiscreant(people) {
  for (const p of people) {
    if (p === "조커") {
      return "조커";
    }
    if (p === "사루만") {
      return "사루만";
    }
  }
  return "";
}

module.exports = alertForMiscreant;
