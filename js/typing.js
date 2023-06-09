import Typed from "https://cdn.skypack.dev/typed.js@2.0.15";
// Necesita estar dentro de un SPAN

const selector_1 = ".typed-label";
const options_1 = {
  strings: [
    "Inicia el decifrado. Escribe el código secreto y descubre el significado. También puedes codificarlo y crear tu propia versión cifrada.",
  ].map((item) => `<span>${item}</span>`),
  typeSpeed: 30,
  startDelay: 300,
  backSpeed: 75,
  shuffle: false, //Alterar el orden en que se escriben las palabras
  backDelay: 1500,
  loop: true, //Repetir el array de strings
  loopCount: 1, //false = infinite
  showCursor: true, //Mostrar cursor palpitante
  cursorChar: "|",
  contentType: "html", //html o null para texto sin formato
};
const typed_1 = new Typed(selector_1, options_1);
