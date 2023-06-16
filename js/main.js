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
const errorMesagge_empty =
  "El campo de texto está vacío 🤨, lo siento 😔. Debe ingresar algún texto.";
const errorMesagge_validCHar =
  'Error 😮, los caracteres válidos son letras de "a" a la "z" y minúsculas 😬.';
if (!navigator.clipboard.readText) {
  document.querySelector("button[data-paste]").dataset.paste = false;
}

function encrypt() {
  const textarea = getTextarea(this);
  if (!textarea.value) {
    showError(errorMesagge_empty);
    return;
  }
  if (/[A-ZÑ]/g.test(textarea.value)) {
    showError(errorMesagge_validCHar);
    return;
  }
  const input = textarea.value;
  document.getElementById("output").value = input.replace(
    RegExp(encryptKeys.map((m) => m[0]).join("|"), "g"),
    function (match, offset, string) {
      return encryptKeys.find((f) => f[0] === match)[1];
    }
  );
  closeModal();
}
function decrypt() {
  const textarea = getTextarea(this);
  if (!textarea.value) {
    showError(errorMesagge_empty);
    return;
  }
  if (/[A-ZÑ]/g.test(textarea.value)) {
    showError(errorMesagge_validCHar);
    return;
  }
  const input = textarea.value;
  document.getElementById("output").value = input.replace(
    RegExp(encryptKeys.map((m) => m[1]).join("|"), "g"),
    function (match, offset, string) {
      return encryptKeys.find((f) => f[1] === match)[0];
    }
  );
  closeModal();
}
function getTextarea(enviroment) {
  return enviroment.parentElement.closest("article").querySelector("textarea");
}
function copyText() {
  const textarea = getTextarea(this);
  if (!textarea.value) {
    showError(errorMesagge_empty);
    return;
  }
  if (/[A-ZÑ]/g.test(textarea.value)) {
    showError(errorMesagge_validCHar);
    return;
  }
  navigator.clipboard
    .writeText(textarea.value)
    .then(() => {
      console.log("Texto copiado al portapapeles");
      this.innerHTML = "✅ Copiado";
      setTimeout(() => {
        this.innerHTML = "Copiar";
      }, 1000);
    })
    .catch((err) => {
      console.error("Error al copiar el texto: ", err);
    });
}
function closeModal(boolean) {
  document
    .querySelector(".container-modal")
    .classList.toggle("hidden", boolean);
}
function pasteToTextarea() {
  const textarea = getTextarea(this);
  let temporalValue = textarea.value;
  navigator.clipboard
    .readText()
    .then(function (text) {
      textarea.value = temporalValue + text;
    })
    .catch(function (error) {
      console.error("Error al leer el portapapeles: ", error);
    });
}
function deleteTextarea() {
  const textarea = getTextarea(this);
  if (!textarea.value) {
    showError("Ya está vacío 😁.");
    return;
  }
  textarea.value = "";
}
document.querySelector("[data-close]").addEventListener("click", closeModal);
document.querySelector("[data-decrypt]").addEventListener("click", decrypt);
document.querySelector("[data-encrypt]").addEventListener("click", encrypt);
document
  .querySelector("[data-paste]")
  .addEventListener("click", pasteToTextarea);
document
  .querySelector("[data-delete]")
  .addEventListener("click", deleteTextarea);
document
  .querySelectorAll("[data-copy]")
  .forEach((f) => f.addEventListener("click", copyText));

addEventListener("keydown", (e) => {
  if (e.code === "Escape") {
    closeModal(true);
  }
});

document
  .querySelector("#pop-mesagge img.close")
  .addEventListener("click", (e) => {
    e.target.parentElement.classList.remove("animate__backInLeft");
    e.target.parentElement.classList.add("animate__hinge");
    setTimeout(() => {
      e.target.parentElement.classList.add("hidden");
    }, 1000);
  });
function showError(mesagge) {
  document.querySelector("#pop-mesagge p").innerHTML = mesagge;
  document.querySelector("#pop-mesagge").classList.remove("hidden");
  document.querySelector("#pop-mesagge").classList.remove("animate__hinge");
  document.querySelector("#pop-mesagge").classList.add("animate__backInLeft");
}
