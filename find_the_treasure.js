const settingsGame = {
  width: 600,
  height: 500,
  map: document.querySelector(".js_map"),
  clicks: 0,
  info: document.querySelector(".js_distance"),
};

let target = {
  x: getRandomNumber(settingsGame.width),
  y: getRandomNumber(settingsGame.height),
};

function getRandomNumber(size) {
  return Math.floor(Math.random() * size);
}

function worksProcess(event) {
  settingsGame.clicks++;
  let distance = getDistance(event.offsetX, event.offsetY);

  if (distance < 8) {
    alert("Клад найден! Сделано кликов: " + settingsGame.clicks);
  }
  if (distance < 10) {
    settingsGame.info.innerHTML = "Обожжешься!";
  } else if (distance < 20) {
    settingsGame.info.innerHTML = "Очень горячо!";
  } else if (distance < 40) {
    settingsGame.info.innerHTML = "Горячо!";
  } else if (distance < 80) {
    settingsGame.info.innerHTML = "Тепло!";
  } else if (distance < 160) {
    settingsGame.info.innerHTML = "Холодно!";
  } else if (distance < 320) {
    settingsGame.info.innerHTML = "Очень холодно!";
  } else {
    settingsGame.info.innerHTML = "Замерзнешь!";
  }

  console.log("click", event.offsetX, event.offsetY, distance);
}

function getDistance(x, y) {
  let diffX = x - target.x;
  let diffY = y - target.y;
  return Math.sqrt(diffX * diffX + diffY * diffY);
}

/*
что нужно сделать
*/