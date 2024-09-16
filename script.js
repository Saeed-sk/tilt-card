const containers = document.querySelectorAll(".card-container");
const cards = document.querySelectorAll(".card");

let scrollY = 0;

window.addEventListener("scroll", () => {
  scrollY = document.documentElement.scrollTop;
});

for (let index = 0; index < cards.length; index++) {
  const light = document.createElement("span");
  light.setAttribute("class", "light");
  cards[index].appendChild(light);
  containers[index].addEventListener("mousemove", (event) => {
    const innerX = event.clientX - containers[index].offsetLeft;
    const innerY = event.clientY - containers[index].offsetTop + scrollY;
    light.style.top = innerY + "px";
    light.style.left = innerX + "px";

    light.classList.add("light-active");

    const x = cards[index].offsetWidth / 2;
    const y = cards[index].offsetHeight / 2;

    const intensityX = 30;
    const intensityY = 10;

    let convertX = ((innerX - x) * intensityX) / x;
    let convertY = ((innerY - y) * intensityY) / y;

    cards[
      index
    ].style.transform = `rotateX(${convertX}deg) rotateY(${convertY}deg)`;
  });
  containers[index].addEventListener("mouseleave", () => {
    light.classList.remove("light-active");
    cards[index].style.transform = `rotateX(0deg) rotateY(0deg)`;
  });
}
