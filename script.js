"use strict";

import data from "./data.json" assert { type: "json" };

const img = document.querySelector(".img");
const desc = document.querySelector(".desc");
const title = document.querySelector(".title");
let count = 0;

/* function imgCycleTime(project) {
  for (let i = x - 1; i < 20; i++) {
    setTimeout(function imgCycle() {
      img.src = `./Content/Project ${project}/${count}.jpg`;
      count++;
    }, 5000);
  }
} */

function swapImg(project, imgNum) {
  img.src = `./Content/Project ${project}/Screen ${imgNum}/${count + 1}.jpg`;
  count++;
}

function imgCycle(project, img) {
  for (let i = 1; i < 10; i++) {
    setTimeout(function () {
      swapImg(project, img);
    }, i * 5000);
  }
}

function update(x) {
  if (document.querySelector("title").textContent === "title") {
    title.textContent = data[x - 1].title;
  } else if (document.querySelector("title").textContent === "description") {
    desc.textContent = data[x - 1].desc;
  } else if (document.querySelector("title").textContent === "imgs 1") {
    let count = 0;
    imgCycle(x, 1);
  } else if (document.querySelector("title").textContent === "imgs 2") {
    let count = 0;
    imgCycle(x, 2);
  } else if (document.querySelector("title").textContent === "imgs 3") {
    let count = 0;
    imgCycle(x, 3);
  }
}

update(1);
