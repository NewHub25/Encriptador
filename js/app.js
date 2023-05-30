//Claves de encriptacion
// `La letra "e" es convertida para "enter"`
// `La letra "i" es convertida para "imes"`
// `La letra "a" es convertida para "ai"`
// `La letra "o" es convertida para "ober"`
// `La letra "u" es convertida para "ufat"`
const encryptKeys = [
  ["a", "ai"],
  ["e", "enter"],
  ["i", "imes"],
  ["o", "ober"],
  ["u", "ufat"],
];
function encrypt() {
  const input = document.getElementById("input").value;
  document.getElementById("output").value = input.replace(
    RegExp(encryptKeys.map((m) => m[0]).join("|"), "g"),
    function (match, offset, string) {
      return encryptKeys.find((f) => f[0] === match)[1];
    }
  );
}
function decrypt() {
  const input = document.getElementById("input").value;
  document.getElementById("output").value = input.replace(
    RegExp(encryptKeys.map((m) => m[1]).join("|"), "g"),
    function (match, offset, string) {
      return encryptKeys.find((f) => f[1] === match)[0];
    }
  );
}
function copyText() {
  navigator.clipboard
    .writeText(document.getElementById("output").value)
    .then(() => {
      console.log("Texto copiado al portapapeles");
    })
    .catch((err) => {
      console.error("Error al copiar el texto: ", err);
    });
}
