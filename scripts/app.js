// Función para desplazar la página al inicio
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Mostrar u ocultar el botón según el desplazamiento
window.addEventListener('scroll', function() {
    const button = document.querySelector('.scroll-to-top');
    if (window.scrollY > 1300) { // Ajusta el valor según sea necesario
        button.style.display = 'block';
    } else {
        button.style.display = 'none';
    }
});
document.addEventListener("DOMContentLoaded", function() {
    const spiderman = document.querySelector(".pendulum");
    if (spiderman) {
        spiderman.classList.add("scale-effect");
    }
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
