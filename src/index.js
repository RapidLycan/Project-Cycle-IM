"use strict";

import data from "../Content/data.json" assert { type: "json" };

const desc = document.querySelector(".desc");
const title = document.querySelector(".title");
const cycleSpeed = 10000;
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
} else {
  Screen = "Text";
}

console.log(Screen);

function imgCycle() {
  slideIndex++;
  if (
    document.querySelector(`.img${slideIndex}`).classList.contains("stop") ||
    slideIndex == 61
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
  console.log("----------");
}

function loadImg() {
  for (let i = 1; i < 61; i++) {
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
  console.log("images loaded");
  console.log("----------");
}

function NextProject() {
  //loads and initiates next project
  currentProject++;

  if (currentProject > data.length) {
    console.log("back to first project");
    currentProject = 1;
  }

  if (Screen !== "Text") {
    //resetting images
    console.log("resestting imgs");
    console.log("----------");
    slideIndex = 0;
    for (let i = 1; i < 61; i++) {
      document.querySelector(`.img${i}`).classList.remove("stop");
    }

    //loading new images
    console.log("loading up new images");
    loadImg();
    console.log(
      `next project lasts for ${data[currentProject - 1].time} miliseconds`
    );
  }

  //sets up text slides
  if (document.querySelector("title").textContent === "title") {
    title.textContent = data[currentProject - 1].title;
    console.log("title swap");
  } else if (document.querySelector("title").textContent === "description") {
    desc.textContent = data[currentProject - 1].desc;
    console.log("desc swap");
  } else {
    console.log("img Page");
  }
  setTimeout(() => {
    StopLastProject();
  }, data[currentProject - 1].time);
}

function StopLastProject() {
  //stops the lasts project before loading up the new one
  console.log("-----W-----");
  console.log("stops the last project");
  console.log("-----W-----");
  NextProject();
}
let time = new Date().getMilliseconds();
console.log(time / 1000);

function sync() {
  let x = 60000 - time;
  return x;
}

setTimeout(() => {
  NextProject();
  if (Screen !== "Text") {
    imgCycle();
    cycler = setInterval(imgCycle, cycleSpeed);
  }
}, sync());
