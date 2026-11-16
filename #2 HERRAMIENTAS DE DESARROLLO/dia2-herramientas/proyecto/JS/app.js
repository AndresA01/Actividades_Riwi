
console.log("✅ app.js empezó a ejecutarse");
console.warn("⚠️ Advertencia de prueba: un warning no detiene la página, solo te avisa de algo.");

// 1. Contador de visitas
let visitas = Number(localStorage.getItem("visitas")) || 0;

visitas++;
localStorage.setItem("visitas", visitas);

document.querySelector("#visitas").textContent = visitas;

// 2. Botón de saludo
const nombreCoder = "Coder de Riwi";
const boton = document.querySelector("#boton-saludar");

if (boton) {
  boton.addEventListener("click", function () {
    const mensaje = document.querySelector("#mensaje");

    if (mensaje) {
      mensaje.textContent =
        "¡Hola, " + nombreCoder + "! Ya sabes depurar con DevTools 🚀";
    }
  });
} else {
  console.error("No se encontró el botón con id='boton-saludar'");
}

console.log("🏁 app.js terminó de ejecutarse");
