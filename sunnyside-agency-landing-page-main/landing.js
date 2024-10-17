document.addEventListener('DOMContentLoaded', function() {
    const navbarToggler = document.getElementById('navbar-toggler');
    const navbarMenu = document.getElementById('navbar-menu');
    const content = document.querySelector('.hero'); // Cambiado a .hero

    navbarToggler.addEventListener('click', function() {
        navbarMenu.classList.toggle('active');
        
        // Push content down when menu is active
        if (navbarMenu.classList.contains('active')) {
            const menuHeight = navbarMenu.offsetHeight;
            content.style.marginTop = `${menuHeight}px`;
        } else {
            content.style.marginTop = '0';
        }
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('#navbar-toggler') && !event.target.closest('#navbar-menu')) {
            if (navbarMenu.classList.contains('active')) {
                navbarMenu.classList.remove('active');
                content.style.marginTop = '0';
            }
        }
    });
});
