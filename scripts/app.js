// Función para desplazar la página al inicio
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Mostrar u ocultar el botón según el desplazamiento
window.addEventListener('scroll', function() {
    const button = document.querySelector('.scroll-to-top');
    if (window.scrollY > 1500) { // Ajusta el valor según sea necesario
        button.style.display = 'block';
    } else {
        button.style.display = 'none';
    }
});