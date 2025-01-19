const text = "Self-taught UX/UI and front-end developer crafting responsive designs for real-world needs.";
const typingSpeed = 100; // Velocidad de escritura en milisegundos
let index = 0;

function typeWriter() {
  const typewriterElement = document.getElementById("typewriter");
  if (index < text.length) {
    typewriterElement.textContent += text[index];
    index++;
    setTimeout(typeWriter, typingSpeed); // Llama a la función de nuevo para la siguiente letra
  }
}

document.addEventListener("DOMContentLoaded", () => {
  typeWriter(); // Inicia la animación cuando la página carga
});