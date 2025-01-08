document.addEventListener("DOMContentLoaded", function () {
    const bannerText = document.querySelector(".content-banner h2");
    const colors = ["red", "green", "blue", "yellow", "pink", "purple", "orange", "lime"];

    function randomColor() {
        return colors[Math.floor(Math.random() * colors.length)];
    }

    function animateText() {
        bannerText.style.color = randomColor();
        bannerText.style.transform = `rotate(${Math.random() * 20 - 10}deg)`;
    }

    setInterval(animateText, 500); // Cambia el color y rotación cada 500ms
});
// Seleccionamos todos los enlaces dentro del navbar con la clase container-navegador
const navLinks = document.querySelectorAll(".container-navegador a");

// Función para agregar la clase de parpadeo
function addBlinkEffect(event) {
  event.target.classList.add("blink");
}

// Función para quitar la clase de parpadeo
function removeBlinkEffect(event) {
  event.target.classList.remove("blink");
}

// Añadimos los eventos a cada enlace
navLinks.forEach(link => {
  link.addEventListener("mouseover", addBlinkEffect);
  link.addEventListener("mouseout", removeBlinkEffect);
});

