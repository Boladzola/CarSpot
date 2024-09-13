const data = [
  { title: "", src: "./images/Car1.png" },
  { title: "", src: "./images/Car2.png" },
  { title: "", src: "./images/Car3.png" },
];

const secondData = [
  { title: "", src: "./images/Car4.png" },
  { title: "", src: "./images/Car5.png" },
  { title: "", src: "./images/Car6.png" },
];

function change_visibility(block_4_close, block_4_open) {
  document.getElementById(block_4_close).style.display = "none";
  document.getElementById(block_4_open).style.display = "";
}

const carouselInner = document.querySelector(".carousel-inner");
const osoboweBtn = document.getElementById("osobowe-btn");
const dostawczeBtn = document.getElementById("dostawcze-btn");

function clearSlider() {
  carouselInner.innerHTML = "";
}

function setActiveButton(activeBtn, inactiveBtn) {
  activeBtn.classList.add("active-btn");
  inactiveBtn.classList.remove("active-btn");
  inactiveBtn.classList.add("inactive-btn");
  activeBtn.classList.remove("inactive-btn");
}

function renderSlider(sliderData) {
  clearSlider();
  for (let i = 0; i < 2; i++) {
    const carouselItem = document.createElement("div");
    carouselItem.classList.add("carousel-item");
    if (i === 0) carouselItem.classList.add("active");

    const carouselItemBlock = document.createElement("div");
    carouselItemBlock.classList.add("carousel-item-block");

    for (let k = 0; k < 2; k++) {
      const div = document.createElement("div");
      const img = document.createElement("img");

      if (sliderData[i * 1 + k]) {
        img.src = sliderData[i * 1 + k].src;
        div.append(img);
        carouselItemBlock.append(div);
      }
    }

    carouselItem.append(carouselItemBlock);
    carouselInner.append(carouselItem);
  }
}

renderSlider(data);
setActiveButton(osoboweBtn, dostawczeBtn);

osoboweBtn.addEventListener("click", function () {
  renderSlider(data);
  setActiveButton(osoboweBtn, dostawczeBtn);
});

dostawczeBtn.addEventListener("click", function () {
  renderSlider(secondData);
  setActiveButton(dostawczeBtn, osoboweBtn);
});
