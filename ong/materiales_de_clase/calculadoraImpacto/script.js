function abrirModal() {
    // 1. Creamos un nuevo elemento <div> desde JavaScript.
    // Este div va a funcionar como contenedor de toda la calculadora.
    let modal = document.createElement("div");

    // 2. Cargamos dentro del div toda la estructura HTML que necesita la calculadora:
    modal.innerHTML = `<h1>Calculadora de Impacto</h1>
                            
                            <input type="number" id="montoDonacion" placeholder="Ingresá un monto">
                            <button id="calcularImpacto">Calcular</button>
                            
                            <p id="resultadoImpacto"></p>
                            
                            <button id="hacerDonacion">Hacer la donación</button>
                            <button id="cerrar">Cerrar</button>`;

    // 3. Insertamos el nuevo div al DOM para que aparezca en pantalla.
    document.body.appendChild(modal);

    // 4. Agregamos una clase CSS al div para aplicarle estilos desde la hoja de estilos.
    modal.classList.add("modalStyle") //FIJA PARA EL PARCIAL ESTOS 4 PASOS

    // 5. Buscamos dentro del nuevo div los elementos que vamos a necesitar manipular.
    // Usamos nuevoDiv.querySelector para limitar la búsqueda al contenido recién creado.
    let inputMonto = modal.querySelector("#montoDonacion");
    let botonCalcular = modal.querySelector("#calcularImpacto");
    let resultadoImpacto = modal.querySelector("#resultadoImpacto");
    let botonHacerDonacion = modal.querySelector("#hacerDonacion");
    let botonCerrar = modal.querySelector("#cerrar");

    // 6. Definimos una función para calcular el impacto de la donación:
    // Recibe un monto, calcula cuántos kits escolares se pueden comprar y los muestra en pantalla
    function calcularImpacto(monto) {
        // Definimos el costo fijo de cada elemento.
        let precioKitEscolar = 5000;
        // Cuenta que calcula en cuántos kits se convierte la donación
        let cantidadKits = monto / precioKitEscolar;
        // Agregamos el texto al párrafo <p>
        resultadoImpacto.textContent = `Con tu donación se pueden entregar ${cantidadKits} kits escolares.`;
    }

    // 7. Cuando el usuario hace click en "Calcular",
    // tomamos el valor escrito en el input y llamamos a la función calcularImpacto.
    botonCalcular.addEventListener("click", function () {
        let monto = inputMonto.value;
        calcularImpacto(monto); //Parcial
    });

    // 8. El botón "Cerrar" elimina el div completo de la página.
    botonCerrar.addEventListener("click", function () {
        modal.remove();
    });

    // 9. El botón "Hacer la donación" reemplaza el contenido de la calculadora
    // por una pantalla simple de agradecimiento.
    botonHacerDonacion.addEventListener("click", function () {
        modal.innerHTML = `<h1>Gracias por tu donación</h1>
                                <a href="index.html">Volver</a>`;
    });
}
