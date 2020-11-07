let points = [];
points.push({ elevation: 1 });
points.push({ elevation: 2 });
points.push({ elevation: 4 });

let totalTime = 0;
let totalDistance = 0;
const totalAscent = calculateAscent();

calculateAscent();
calculateTime();
calculateDistance();
const pace = totalTime / 60 / totalDistance;

function calculateAscent() {
  let result = 0;
  for (let i = 1; i < points.length; i++) {
    const verticalChange = points[i].elevation - points[i - 1].elevation;
    result += verticalChange > 0 ? verticalChange : 0;
  }
  return result;
}

function calculateTime() {
  return;
}

function calculateDistance() {
  return;
}

module.exports = totalAscent;
