import Typed from "https://cdn.skypack.dev/typed.js@2.0.15";
// Necesita estar dentro de un SPAN

const selector = ".typed-label";
const options = {
  strings: [
    "Inicia el decifrado. Escribe el código secreto y descubre el significado. También puedes codificarlo y crear tu propia versión cifrada.",
  ].map((item) => `<span>${item}</span>`),
  typeSpeed: 75,
  startDelay: 300,
  backSpeed: 75,
  shuffle: false, //Alterar el orden en que se escriben las palabras
  backDelay: 1500,
  loop: true, //Repetir el array de strings
  loopCount: false, //false = infinite
  showCursor: true, //Mostrar cursor palpitante
  cursorChar: "|",
  contentType: "html", //html o null para texto sin formato
};
const typed = new Typed(selector, options);
