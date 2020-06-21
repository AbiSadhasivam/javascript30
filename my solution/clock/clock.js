let setTransform = (className, deg) => {
  let ele = document.getElementsByClassName(className)[0];
  ele.style.transform = "rotate(" + deg + "deg)";
}

setInterval(() => {
  let currentTime = new Date();
  let seconds = currentTime.getSeconds();
  let minutes = currentTime.getMinutes();
  let hour = currentTime.getHours()>12 ?currentTime.getHours() %12: currentTime.getHours();
  let secondsDeg = seconds * 6 - 90; //360/60
  let minutesDeg = minutes * 6 - 90; //360/60
  let hourDeg = hour  * 30 - 90; // 360/12
  setTransform('hour', hourDeg);
  setTransform('minute', minutesDeg);
  setTransform('second', secondsDeg);
},1000)
