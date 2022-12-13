"use strict";

import data from "./data.json" assert { type: "json" };

const desc = document.querySelector(".desc");
const title = document.querySelector(".title");

const img = document.querySelector(".img");
let count = 1;
let currentProject = 1;
let Screen = "";

if (document.querySelector("title").textContent === "imgs 1") {
  Screen = 1;
} else if (document.querySelector("title").textContent === "imgs 2") {
  Screen = 2;
} else if (document.querySelector("title").textContent === "imgs 3") {
  Screen = 3;
}

function nextImg(project) {
  img.src = `./Content/Project ${project}/Screen ${Screen}/${count}.png`;
  count++;
  console.log("image rotated succefully");
}

function firstImg(project) {
  img.src = `./Content/Project ${project}/Screen ${Screen}/${1}.png`;
  count = 2;
  console.log("back to start");
}

function swapImg(project) {
  if (`./Content/Project ${project}/Screen ${Screen}/${count}.png`) {
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

/* setInterval(() => {
  window.clearInterval(timecheck);
}, 5000);

 */
