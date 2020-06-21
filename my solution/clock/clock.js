//minute
//second
//hour

// 360 / 12;
let getRotationDegree = (elementClassName) => {
  let ele = document.getElementsByClassName(elementClassName)[0];
  let rotationMatrix = window.getComputedStyle(ele).transform;
  let values = rotationMatrix.split("(")[1].split(")")[0].split(",");
  let angle = Math.round(Math.atan2(values[1], values[0]) * (180 / Math.PI));
  return [angle < 0 ? angle + 360 : angle, ele]; //adding 360 degrees here when angle < 0 is equivalent to adding (2 * Math.PI) radians before
};

setInterval(() => {
  let [rotationDeg, ele] = getRotationDegree('second');
  ele.style.transform = "rotate(" + (rotationDeg + 6) + "deg)";
}, 1000);
setInterval(() => {
  let [rotationDeg, ele] = getRotationDegree('minute');
  ele.style.transform = "rotate(" + (rotationDeg + 6) + "deg)";
}, 1000 * 60 );
setInterval(() => {
  let [rotationDeg, ele] = getRotationDegree('hour');
  ele.style.transform = "rotate(" + (rotationDeg + 30) + "deg)";
}, 1000 * 60 * 60);


