const list = document.querySelector("ul");
const listItems = document.querySelectorAll("ul li");
const displayImgs = [];

let intervalTime = 3000;

let display = document.createElement("div");
display.id = "display-container";
list.appendChild(display);
let displayBounding = display.getBoundingClientRect();

let info = document.createElement("div");
info.id = "info";
info.textContent = "";
display.appendChild(info);

let activeItem = 0;
const activeItemBorder = document.createElement("div");
activeItemBorder.id = "active-item-border";
document.body.appendChild(activeItemBorder);

positionActiveItemBorder();

window.addEventListener("resize", () => {
  positionActiveItemBorder();
});

let scrollTimeOut = false;
let scrollTimer;

function setScrollTimeOut() {
  scrollTimeOut = true;
  clearTimeout(scrollTimer);
  scrollTimer = setTimeout(() => {
    scrollTimeOut = false;
  }, 500);
}

list.addEventListener("wheel", (e) => {
  e.preventDefault();
  if (scrollTimeOut || e.wheelDeltaY == 0) return;
  setScrollTimeOut();
  listItems[activeItem].classList.remove("active");
  let direction = e.wheelDeltaY / -Math.abs(e.wheelDeltaY);
  activeItem += direction;
  if (activeItem > listItems.length - 1) activeItem = 0;
  else if (activeItem < 0) activeItem = listItems.length - 1;
  positionActiveItemBorder();
  positionDisplayImg();
  setAutoScroll();
});

listItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    listItems[activeItem].classList.remove("active");
    activeItem = index;
    positionActiveItemBorder();
    positionDisplayImg();
    setAutoScroll();
  });
  let displayImg = document.createElement("img");
  displayImg.src = item.querySelector("img").src;
  displayImg.width = displayBounding.width;
  displayImg.height = displayBounding.height;
  display.appendChild(displayImg);
  displayImgs.push(displayImg);
});

let autoScroll = null;
setAutoScroll();

function positionActiveItemBorder() {
  listItems[activeItem].classList.add("active");
  let bounding = listItems[activeItem].getBoundingClientRect();
  activeItemBorder.style.top = bounding.top + "px";
  activeItemBorder.style.left = bounding.left + "px";
  activeItemBorder.style.width = bounding.width + "px";
  activeItemBorder.style.height = bounding.height + "px";
}
function positionDisplayImg() {
  display.scrollTop = displayImgs[activeItem].offsetTop;
}

function setAutoScroll() {
  clearInterval(autoScroll);
  autoScroll = setInterval(() => {
    listItems[activeItem].classList.remove("active");
    activeItem++;
    if (activeItem > listItems.length - 1) activeItem = 0;
    else if (activeItem < 0) activeItem = listItems.length - 1;
    positionActiveItemBorder();
    positionDisplayImg();
  }, intervalTime);
}