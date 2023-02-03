const hourHand = document.querySelector("[data-hour-hand]");
const minuteHand = document.querySelector("[data-minute-hand]");
const secondHand = document.querySelector("[data-second-hand]");

setInterval(setClock, 1000);

function setClock() {
  const currentTime = new Date();

  const secondRatio = currentTime.getSeconds() / 60;
  const minutesRatio = (secondRatio + currentTime.getMinutes()) / 60;
  const hoursRatio = (minutesRatio + currentTime.getHours()) / 12;
  setRotation(hourHand, hoursRatio);
  setRotation(minuteHand, minutesRatio);
  setRotation(secondHand, secondRatio);
}

function setRotation(element, rotationRatio) {
  element.style.setProperty("--rotation", rotationRatio * 360);
}

setClock();
