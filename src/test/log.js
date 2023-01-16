window.addEventListener(
  "error",
  function (e) {
    console.log(e);
    document.querySelector(".root").textContent = e.target;
  },
  true
);

console.error("you goofed up");

const data = [
  {
    index: 1,
    title: "Dekonstruktiv typografi 2MOK",
    desc: "en dekonstruktiv presentasjon av Dave Carson med bile(r) og tekst. hvem er han og hva har han gjort i tilleg til personalia.   En musikkplakat for et typisk grunge-band med navn,tid, sted, QR-Kode og annen info du mener skal være med (feks. Pearl Jam, Nirvana mm).",
    seconds: 70,
  },
  {
    index: 2,
    title: "Kattalogen",
    desc: "Produksjon av skolen elevkatalog. Et samarbeid mellom elever fra klassene 2MED og 3MOK.  Fotografering: Omlag 470 portretter av skolens vg1-elever og 64 gruppefoto av skolens klasser.   Grafisk design på 68 sider, inkl. forsiden med inspirasjon fra Star Wars-plakater",
    seconds: 320,
  },
];

const desc = document.querySelector(".desc");
const title = document.querySelector(".title");
const cycleSpeed = 10000; //millisekkunder mellom hver gang bildene bytter !!IKKE ENDRE!!
const syncTimer = 60; //påvirker hvor lang tid prosjektet bruker på å synce opp når startet <tall = <tid
let Screen = "";
let currentProject = 0;
let slideIndex = 0;
let cycler;
let iterationPush = 0;

if (document.querySelector("title").textContent === "imgs 1") {
  Screen = 1;
} else if (document.querySelector("title").textContent === "imgs 2") {
  Screen = 2;
} else if (document.querySelector("title").textContent === "imgs 3") {
  Screen = 3;
} else {
  Screen = "Text";
}

console.log("this is screen: ", Screen);

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
  console.log("images loaded");
  console.log("----------");
}

function NextProject() {
  //loads and initiates next project
  currentProject++;

  if (currentProject > data.length) {
    console.log("back to first project");
    currentProject = 1;
    iterationPush = 10;
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
      `next project lasts for ${data[currentProject - 1].seconds} seconds`
    );
  }

  //sets up text slides
  if (document.querySelector("title").textContent === "title") {
    title.classList.add("anim");
    setTimeout(() => {
      title.textContent = data[currentProject - 1].title;
    }, 1000);
    setTimeout(() => {
      title.classList.remove("anim");
    }, 2000);
    console.log("title swap");
  } else if (document.querySelector("title").textContent === "description") {
    desc.classList.add("anim");
    setTimeout(() => {
      desc.textContent = data[currentProject - 1].desc;
    }, 1000);
    setTimeout(() => {
      desc.classList.remove("anim");
    }, 2000);
    console.log("desc swap");
  } else {
    console.log("img Page");
  }

  //que next project
  console.log("queing next project now");
  setTimeout(() => {
    StopLastProject();
  }, (data[currentProject - 1].seconds + iterationPush) * 1000);
}

function StopLastProject() {
  //stops the lasts project before loading up the new one
  console.log("-----W-----");
  console.log("stops the last project");
  console.log("-----W-----");
  NextProject();
}
let time = new Date().getMilliseconds() + new Date().getSeconds() * 1000;
console.log(time);

function sync() {
  let x = syncTimer * 1000 - time;
  return x;
}

setTimeout(() => {
  NextProject();
  if (Screen !== "Text") {
    imgCycle();
    cycler = setInterval(imgCycle, cycleSpeed);
  }
}, sync());
