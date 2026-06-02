/* Funcion de Carrousel ** IMPORTANTE PARA EL PARCIAL ** */
let imagenes = document.querySelectorAll('.slides img');
let posicion = 0;

function activarImagen(posicion) {
    // 2. Usamos 'slide-active' para no romper la navbar
    imagenes.forEach((img) => img.classList.remove('slide-active'));
    imagenes[posicion].classList.add('slide-active');
}

function siguiente() {
    posicion = posicion + 1;
    if (posicion >= imagenes.length) {
        posicion = 0;
    }
    activarImagen(posicion);
}

function anterior() {
    posicion = posicion - 1;
    if (posicion < 0) {
        posicion = imagenes.length - 1;
    }
    activarImagen(posicion);
}