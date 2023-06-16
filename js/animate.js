const titleH1 = document.querySelector(".header h1");
function memo(ar = []) {
  let cont = -1;
  return () => {
    if (cont >= ar.length - 1) cont = -1;
    ++cont;
    return [ar.at(cont - 1), ar[cont]];
  };
}
const duration_animation_by_steps = 5;
const animated__list = [
  "animate__backInDown",
  "animate__bounceInDown",
  "animate__fadeInDown",
  "animate__zoomIn",
];
const readEachItemBySteps = memo(animated__list);
const toggleClassAnimation = () => {
  const [past, current] = readEachItemBySteps();
  titleH1.classList.remove(past);
  titleH1.classList.add(current);
};

titleH1.classList.add("animate__animated"); //Importante
setInterval(toggleClassAnimation, duration_animation_by_steps * 1000);
