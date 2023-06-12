import Typed from "https://cdn.skypack.dev/typed.js@2.0.15";
const selector = 'body'
const typed = new Typed(selector, {
  strings: [
    "desarrollador web",
    "diseñador de páginas",
    "creador online web",
    "full stack",
    "web developer",
  ].map((item) => `<i class="section-span_i">${item}</i>`),
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
});
