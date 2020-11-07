let points = [];
points.push({ elevation: 1 });
points.push({ elevation: 2 });
points.push({ elevation: 4 });

let totalAscent = 0;
let totalTime = 0;
let totalDistance = 0;

calculateAscent();
calculateTime();
calculateDistance();
const pace = totalTime / 60 / totalDistance;

function calculateAscent() {
  for (let i = 1; i < points.length; i++) {
    const verticalChange = points[i].elevation - points[i - 1].elevation;
    totalAscent += verticalChange > 0 ? verticalChange : 0;
  }
}

function calculateTime() {
  return;
}

function calculateDistance() {
  return;
}

module.exports = totalAscent;
