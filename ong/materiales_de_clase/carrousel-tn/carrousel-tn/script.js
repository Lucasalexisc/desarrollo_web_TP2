let imagenes = document.querySelectorAll('img')

let posicion = 0

function activarImagen(posicion) {
    imagenes.forEach((img) => img.classList.remove('active'))
    imagenes[posicion].classList.add('active')
}

function siguiente() {
    posicion = posicion + 1

    if (posicion >= imagenes.length) {
        posicion = 0
    }

    activarImagen(posicion)
}

function anterior() {
    posicion = posicion - 1

    if (posicion < 0) {
        posicion = imagenes.length - 1
    }

    activarImagen(posicion)
}