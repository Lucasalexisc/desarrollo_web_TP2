// Variable del menu para abrirlo en celulares
var menuToggle = document.getElementById('mobile-menu');
var navList = document.getElementById('nav-list');

if (menuToggle && navList) {
    menuToggle.addEventListener('click', function() {
        navList.classList.toggle('open');
    });
}

// Lógica de SPA (Cambio entre pestañas sin recargar la página)
var navButtons = document.querySelectorAll('.nav-link');
var tabSections = document.querySelectorAll('.tab-content');

navButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        var targetTab = button.getAttribute('data-tab');

        // Sacar clase activa a todos los botones y ponérsela al que clickeamos
        navButtons.forEach(function(btn) {
            btn.classList.remove('active');
        });
        button.classList.add('active');

        // Ocultar todas las secciones y mostrar solo la que coincide con el ID
        tabSections.forEach(function(section) {
            section.classList.remove('active');
            if (section.id === targetTab) {
                section.classList.add('active');
            }
        });

        // Si el menú del celular está abierto, lo cerramos al hacer click
        if (navList.classList.contains('open')) {
            navList.classList.remove('open');
        }

        // Subir al inicio de la página automáticamente
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

// Función para el formulario de contacto
var formulario = document.getElementById('contactForm');
if (formulario) {
    formulario.addEventListener('submit', function(event) {
        event.preventDefault(); // Evitamos que refresque la web
        
        var nombre = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var motivo = document.getElementById('motivo').value;

        alert("¡Muchas gracias " + nombre + "!\nRecibimos tu mensaje por: '" + motivo + "'. Te responderemos pronto a " + email);
        formulario.reset();
    });
}

// Funciones para botones auxiliares
function donarPlan(nombrePlan) {
    alert("¡Gracias por querer colaborar con el plan: " + nombrePlan + "!\nEn un sitio real, acá abriríamos el link de Mercado Pago.");
}

function irAContacto() {
    alert("Te llevamos al formulario de contacto para coordinar la adopción o la visita.");
    // Buscamos el boton de contacto en el menú y simulamos el click
    var botonContacto = document.querySelector('[data-tab="contacto"]');
    if (botonContacto) {
        botonContacto.click();
    }
}