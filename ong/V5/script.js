/* Menu desplegable responsive */
function abrirMenu() {
    let flexNav = document.querySelector('ul.navbar');
    if (flexNav) {
        flexNav.classList.toggle('flexNav');
    }
}

/* Carrousel corregido */
// Seleccionamos únicamente las imágenes o pictures dentro del contenedor del carrousel
let imagenes = document.querySelectorAll('.slides picture, .slides > img');
let posicion = 0;

function activarImagen(posicion) {
    if (imagenes.length === 0) return;
    imagenes.forEach((img) => img.classList.remove('active'));
    imagenes[posicion].classList.add('active');
}

function siguiente() {
    if (imagenes.length === 0) return;
    posicion = posicion + 1;
    if (posicion >= imagenes.length) {
        posicion = 0;
    }
    activarImagen(posicion);
}

function anterior() {
    if (imagenes.length === 0) return;
    posicion = posicion - 1;
    if (posicion < 0) {
        posicion = imagenes.length - 1;
    }
    activarImagen(posicion);
}

// Iniciar carrousel
if (imagenes.length > 0) {
    activarImagen(posicion);
}

/* Modal y Calculadora de Impacto */
function abrirModal() {
    // 1. fondo difuminado
    let overlay = document.createElement("div");
    overlay.classList.add("modal-overlay");
    document.body.appendChild(overlay);

    // 2. calculadora
    let modal = document.createElement("div");

    // 3. HTML del modal
    modal.innerHTML = `<h1>Calculadora de Impacto</h1>
                        <p style="color: var(--text-muted); background: none; border: none; padding: 0; margin-bottom: 15px; font-weight: normal; text-align: left; min-height: auto; font-size: 1rem;">
                            Ingresá un monto estimado para calcular los kits escolares de alimentos o insumos de salud en los que se transformará tu donación.
                        </p>
                        <input type="number" id="montoDonacion" placeholder="Monto en pesos (ej: 15000)" min="1">
                        <button id="calcularImpacto">Calcular Impacto</button>
                        
                        <p id="resultadoImpacto" style="display: none;"></p>
                        
                        <button id="hacerDonacion" style="display: none;">Hacer la donación</button>
                        <button id="cerrar">Cerrar</button>`;

    // 4. lo cargo a la pag
    document.body.appendChild(modal);

    // 5. estilos 
    modal.classList.add("modalStyle");

    // 6. Selectores internos
    let inputMonto = modal.querySelector("#montoDonacion");
    let botonCalcular = modal.querySelector("#calcularImpacto");
    let resultadoImpacto = modal.querySelector("#resultadoImpacto");
    let botonHacerDonacion = modal.querySelector("#hacerDonacion");
    let botonCerrar = modal.querySelector("#cerrar");

    // 7. logica del calculo
    function calcularImpacto(monto) {
        if (isNaN(monto) || monto <= 0) {
            resultadoImpacto.textContent = "Por favor, ingresá un monto válido superior a 0.";
            resultadoImpacto.style.display = "block";
            botonHacerDonacion.style.display = "none";
            return;
        }

        let precioKitAlimento = 5000;
        let cantidadKits = (monto / precioKitAlimento).toFixed(1);

        // Sin decimales
        if (cantidadKits.endsWith('.0')) {
            cantidadKits = Math.floor(monto / precioKitAlimento);
        }

        resultadoImpacto.textContent = `Con tu donación se pueden entregar ${cantidadKits} kits de alimentación y cuidado.`;
        resultadoImpacto.style.display = "block";
        botonHacerDonacion.style.display = "block";
    }

    // 8. Event Listener para Calcular
    botonCalcular.addEventListener("click", function () {
        let monto = parseFloat(inputMonto.value);
        calcularImpacto(monto);
    });

    // 9. Funciones para Cerrar modal
    function cerrarModal() {
        modal.remove();
        overlay.remove();
    }

    botonCerrar.addEventListener("click", cerrarModal);
    overlay.addEventListener("click", cerrarModal);

    // 10. Confirmación de Donación
    botonHacerDonacion.addEventListener("click", function () {
        modal.innerHTML = `<h1>¡Gracias por tu donación!</h1>
                            <p style="color: var(--primary); background: transparent; border: none; padding: 10px; font-weight: bold;">
                                Tu apoyo es fundamental para que sigamos rescatando y cuidando perritos. ¡Cada patita te lo agradece!
                            </p>
                            <button id="cerrarGracias" style="background-color: var(--primary); color: white; border: none; padding: 12px; border-radius: var(--radius-md); font-family: 'Fredoka', sans-serif; cursor: pointer; width: 100%; margin-top: 15px;">Finalizar</button>`;

        let botonCerrarGracias = modal.querySelector("#cerrarGracias");
        botonCerrarGracias.addEventListener("click", cerrarModal);
    });
}
