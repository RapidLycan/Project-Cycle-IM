"use strict";

import data from "./data.json" assert { type: "json" };

const img = document.querySelector(".img");
const desc = document.querySelector(".desc");
const title = document.querySelector(".title");
let count = 0;
let next = true;
let projectCount = 1;

/* function imgCycleTime(project) {
  for (let i = x - 1; i < 20; i++) {
    setTimeout(function imgCycle() {
      img.src = `./Content/Project ${project}/${count}.jpg`;
      count++;
    }, 5000);
  }
} */

function swapImg(project, imgNum) {
  img.src = `./Content/Project ${project}/Screen ${imgNum}/${count + 1}.png`;
  count++;
}

function imgCycle(project, img) {
  next = true;
  for (let i = 1; i < 10; i++) {
    if (next === true) {
      setTimeout(function () {
        swapImg(project, img);
      }, i * 5000);
    } else {
      console.log("it broke");
      break;
    }
  }
}

function update(x) {
  next = false;
  projectCount++;
  if (document.querySelector("title").textContent === "title") {
    title.textContent = data[x - 1].title;
  } else if (document.querySelector("title").textContent === "description") {
    desc.textContent = data[x - 1].desc;
  } else if (document.querySelector("title").textContent === "imgs 1") {
    let count = 0;
    setTimeout(imgCycle(x, 1), 10000);
  } else if (document.querySelector("title").textContent === "imgs 2") {
    let count = 0;
    setTimeout(imgCycle(x, 2), 10000);
  } else if (document.querySelector("title").textContent === "imgs 3") {
    let count = 0;
    setTimeout(imgCycle(x, 3), 10000);
  }
}

setInterval(update(projectCount), 20000);

/* for (let i = 0; i < 1; ) {
  let time = new Date().getSeconds;
}

for (let i = 1; i < data.length; i++) {
}


update(1);
 */
