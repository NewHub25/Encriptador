const ANIMATED_BACKGROUND = document.getElementById("animatedBackground");

const squares_quantity = 20;
const fragment = document.createDocumentFragment();

const range = (a, b) => Math.abs(a - b) * Math.random() + Math.min(a, b);
for (let i = 0; i < squares_quantity; i++) {
  const square = document.createElement("li");
  square.style.width = range(2, 10) + "vw";
  square.style.aspectRatio = "1/1";
  square.style.left = range(20, 80) + "%";
  square.style.animationDelay = range(0, 20) + "s";
  fragment.appendChild(square);
}
ANIMATED_BACKGROUND.appendChild(fragment);
