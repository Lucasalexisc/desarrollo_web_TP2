// // CONTROLADOR DE PESTAÑAS (SPA)
// function switchTab(tabId) {
//     // 1. Ocultar todos los contenidos de pestañas
//     const contents = document.querySelectorAll('.tab-content');
//     contents.forEach(content => {
//         content.classList.remove('active');
//     });

//     // 2. Remover estado activo de los botones de navegación
//     const buttons = document.querySelectorAll('.nav-btn');
//     buttons.forEach(button => {
//         button.classList.remove('active');
//     });

//     // 3. Mostrar la pestaña seleccionada
//     const targetTab = document.getElementById(tabId);
//     if (targetTab) {
//         targetTab.classList.add('active');
//     }

//     // 4. Activar el botón correspondiente en la barra de navegación
//     // Buscamos el botón por el atributo de su evento onclick
//     buttons.forEach(button => {
//         if (button.getAttribute('onclick').includes(tabId)) {
//             button.classList.add('active');
//         }
//     });

//     // Hacer scroll hacia arriba automáticamente al cambiar de sección
//     window.scrollTo({ top: 0, behavior: 'smooth' });
// }

// // SIMULADOR DE ACCIONES DE DONACIÓN
// function simularDonacion(tipoPlan) {
//     alert(`¡Muchas gracias por tu intención de colaborar! \nHas seleccionado el plan: "${tipoPlan}". \nEn un entorno real, aquí se integraría la pasarela de pagos (Mercado Pago / PayPal).`);
// }

// // MANEJO DEL FORMULARIO DE CONTACTO/ADOPCIÓN
// function handleForm(event) {
//     event.preventDefault(); // Evita que la página se recargue

//     // Captura de datos básicos
//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const interes = document.getElementById('interes').value;

//     let mensajeCustom = `¡Gracias ${name}! Recibimos tu solicitud para de tipo: "${interes}". Nos contactaremos a ${email} en las próximas 48 horas.`;

//     alert(mensajeCustom);

//     // Limpieza de formulario
//     document.getElementById('contactForm').reset();
// }