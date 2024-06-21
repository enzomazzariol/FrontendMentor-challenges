// Obtener elementos del DOM
const menuIcon = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon');
const menuOverlay = document.querySelector('.menu-overlay');
const menu = document.querySelector('.menu');

// Evento para abrir el menú
menuIcon.addEventListener('click', function() {
    menu.classList.add('active');
    menuOverlay.style.right = '0';
    document.body.style.overflow = 'hidden'; // Evita que el body haga scroll cuando el menú está abierto
});

// Evento para cerrar el menú
closeIcon.addEventListener('click', function() {
    menu.classList.remove('active');
    menuOverlay.style.right = '-100%';
    document.body.style.overflow = 'auto'; // Habilita el scroll del body al cerrar el menú
});

// Cerrar menú al hacer clic fuera del menú en el overlay
menuOverlay.addEventListener('click', function(event) {
    if (event.target === menuOverlay) {
        menu.classList.remove('active');
        menuOverlay.style.right = '-100%';
        document.body.style.overflow = 'auto'; // Habilita el scroll del body al cerrar el menú
    }
});

// Cerrar menú al presionar la tecla Esc
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        menu.classList.remove('active');
        menuOverlay.style.right = '-100%';
        document.body.style.overflow = 'auto'; // Habilita el scroll del body al cerrar el menú
    }
});
