"use strict";

import data from "../Content/data.json" assert { type: "json" };

const desc = document.querySelector(".desc");
const title = document.querySelector(".title");
let Screen = "";
let currentProject = 0;
let slideIndex = 0;
let cycler;

if (document.querySelector("title").textContent === "imgs 1") {
  Screen = 1;
} else if (document.querySelector("title").textContent === "imgs 2") {
  Screen = 2;
} else if (document.querySelector("title").textContent === "imgs 3") {
  Screen = 3;
}

function imgCycle() {
  slideIndex++;
  if (
    document.querySelector(`.img${slideIndex}`).classList.contains("stop") ||
    slideIndex == 11
  ) {
    document.querySelector(`.img${slideIndex - 1}`).classList.add("hidden");
    slideIndex = 1;
    console.log("back to start");
  }

  console.log("swapping to ", slideIndex);
  document
    .querySelector(`.img${slideIndex == 1 ? 1 : slideIndex - 1}`)
    .classList.add("hidden");
  document.querySelector(`.img${slideIndex}`).classList.remove("hidden");
  console.log("completed");
  console.log("------------");
}

function loadImg() {
  console.log("loading");
  for (let i = 1; i < 21; i++) {
    {
      document.querySelector(
        `.img${i}`
      ).src = `../Content/Project ${currentProject}/Screen ${Screen}/${i}.png`;
      document.querySelector(`.img${i}`).classList.add("hidden");

      document
        .querySelector(`.img${i}`)
        .addEventListener("error", function handleError() {
          document.querySelector(`.img${i}`).classList.add("stop");
        });
    }
  }
  console.log("loaded images");
}

function nextProject() {
  currentProject++;
  clearInterval(cycler);
  if (currentProject > data.length) {
    currentProject = 1;
  }
  if (document.querySelector("title").textContent === "title") {
    title.textContent = data[currentProject - 1].title;
  } else if (document.querySelector("title").textContent === "description") {
    desc.textContent = data[currentProject - 1].desc;
  } else {
    slideIndex = 0;
    loadImg(Screen);
    imgCycle();
    cycler = setInterval(imgCycle, 5000);
  }
}

nextProject();
setInterval(nextProject, 60000);

/* 

function nextImg(project) {
  img.src = `../Content/Project ${project}/Screen ${Screen}/${count}.png`;
  count++;
  console.log("image rotated succefully");
}

function firstImg(project) {
  img.src = `../Content/Project ${project}/Screen ${Screen}/${1}.png`;
  count = 2;
  console.log("back to start");
}

function swapImg(project) {
  if (
    fs.existsSync(`../Content/Project ${project}/Screen ${Screen}/${count}.png`)
  ) {
    firstImg(project);
  } else {
    nextImg(project);
  }
}

function timecheck() {
  const updater = setInterval(() => {
    let time = String(new Date().getSeconds());
    if (time.slice(1) === 5 || time === 5) {
      swapImg(currentProject);
      count++;
    }
  }, 1000);
}

function update(x) {
  if (document.querySelector("title").textContent === "title") {
    title.textContent = data[x - 1].title;
    currentProject++;
  } else if (document.querySelector("title").textContent === "description") {
    desc.textContent = data[x - 1].desc;
    currentProject++;
  } else if (document.querySelector("title").textContent === "imgs 1") {
    console.log("start next gen");
    let count = 1;
    window.clearInterval("updater");
    timecheck;
    currentProject++;
  } else if (document.querySelector("title").textContent === "imgs 2") {
    let count = 1;
    window.clearInterval("updater");
    timecheck;
    currentProject++;
  } else if (document.querySelector("title").textContent === "imgs 3") {
    let count = 1;
    window.clearInterval("updater");
    timecheck;
    currentProject++;
  }
}

timecheck();

function start() {
  setInterval(update(currentProject), 1000);
}

start();

setInterval(() => {
  window.clearInterval(timecheck);
}, 5000);

*/
