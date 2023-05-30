/** 
* Debe funcionar solo con letras minúsculas
* No deben ser utilizados letras con acentos ni caracteres especiales
* Debe ser posible convertir una palabra para la versión encriptada también devolver una palabra encriptada para su versión original.
* La página debe tener campos para inserción del texto que será encriptado o desencriptado, y el usuario debe poder escoger entre as dos opciones.
* El resultado debe ser mostrado en la pantalla.
*  Un botón que copie el texto encriptado/desencriptado para la sección de transferencia, o sea que tenga la misma funcionalidad del ctrl+C o de la opción "copiar" del menú de las aplicaciones.
-`La letra "e" es convertida para "enter"`
-`La letra "i" es convertida para "imes"`
-`La letra "a" es convertida para "ai"`
-`La letra "o" es convertida para "ober"`
-`La letra "u" es convertida para "ufat"`
 */

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
