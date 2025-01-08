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

document.addEventListener("DOMContentLoaded", function() {
    const categories = document.querySelectorAll(".card-category");

    categories.forEach(category => {
        setInterval(() => {
            const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
            category.style.backgroundColor = randomColor;
        }, 500); // Cambia de color cada 500 milisegundos
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const blogs = document.querySelectorAll(".card-blog");

    blogs.forEach(blog => {
        blog.addEventListener("mouseover", () => {
            const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
            blog.style.backgroundColor = randomColor;
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const features = document.querySelectorAll(".card-feature");

    features.forEach(feature => {
        feature.addEventListener("mouseover", () => {
            const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
            feature.style.backgroundColor = randomColor;
        });

        feature.addEventListener("mouseout", () => {
            feature.style.backgroundColor = '#fff';
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const basketIcon = document.querySelector(".container-user .fa-basket-shopping");

    basketIcon.addEventListener("mouseover", () => {
        basketIcon.classList.add("multiplied-icons");
    });

    basketIcon.addEventListener("mouseout", () => {
        basketIcon.classList.remove("multiplied-icons");
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const customerSupportIcon = document.querySelector(".customer-support i");

    customerSupportIcon.addEventListener("click", () => {
        alert("Lo sentimos, no tenemos ningún support ni ningún customer.");
        customerSupportIcon.style.color = 'red'; // Cambia el color del icono al hacer clic
    });

    customerSupportIcon.addEventListener("mouseout", () => {
        customerSupportIcon.style.color = ''; // Devuelve el color original al sacar el ratón
    });
});
