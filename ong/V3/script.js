// Variable del menu para abrirlo en celulares (se mantiene igual)
var menuToggle = document.getElementById('mobile-menu');
var navList = document.getElementById('nav-list');

if (menuToggle && navList) {
    menuToggle.addEventListener('click', function() {
        navList.toggle('open');
    });
}

// NUEVA LÓGICA SPA: Ahora busca CUALQUIER elemento con data-tab en todo el sitio
// Esto incluye los botones del menú, los "Leer más" del blog y los "Volver"
var spaButtons = document.querySelectorAll('[data-tab]');
var tabSections = document.querySelectorAll('.tab-content');

spaButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        var targetTab = button.getAttribute('data-tab');

        // 1. Manejo del menú de arriba:
        // Buscamos si el botón que tocamos es parte del menú principal
        var menuButtons = document.querySelectorAll('.nav-link');
        menuButtons.forEach(function(btn) {
            btn.classList.remove('active');
            // Si el data-tab del botón del menú coincide con la sección actual, lo pintamos de verde
            if (btn.getAttribute('data-tab') === targetTab) {
                btn.classList.add('active');
            }
        });

        // 2. Cambio de sección: Ocultamos todas y mostramos la elegida
        tabSections.forEach(function(section) {
            section.classList.remove('active');
            if (section.id === targetTab) {
                section.classList.add('active');
            }
        });

        // 3. Si estamos en el celu y el menú estaba abierto, lo cerramos
        if (navList.classList.contains('open')) {
            navList.classList.remove('open');
        }

        // 4. Subir al inicio de la página automáticamente con un efecto suave
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