// TIPOS DE VARIABLES

// STRING o CADENA DE TEXTO

// let => datos que pueden cambiar
// const => pi

// Estructura variables: let nombre = dato

// let saludo = "Hola mundo!"
// console.log(saludo)

// TIPO DE VARIABLE: NUMERO o NUMBER

// const numero = 20
// console.log(numero)

// let edadProfe = (18 * 2) + 1
// console.log(edadProfe)

// const fechaNacimiento = 1989

// let edadProfe = 2026 - fechaNacimiento
// console.log(edad)

// VARIABLE DE TIPO BOOLEANO: true / false

// const esMayorDeEdad = edadProfe >= 18
// console.log(esMayorDeEdad)

// TIPO DE VARIABLE: ARRAY

// let lenguajes = ["HTML", "CSS", "JAVASCRIPT"]
// let lenguajes2 = ["React", "NodeJS"]

// console.log(lenguajes)

// TIPOS DE VARIABLES: OBJETOS
// ELEMENTOS QUE TIENEN PARES DE CLAVE - VALOR

let messi = {
    nombre: "Lionel Andrés Messi",
    nacionalidad: "Argentina",
    edad: 36,
    equipo: "Inter Miami",
    goles: 900,
    campeonDelMundo: true,
    retirado: false,
    equipos: ["Barcelona", "PSG", "Newell's"],
    meterGol: function () {
        messi.goles = messi.goles + 1;
    }
}

messi.meterGol()
console.log("Messi lleva marcados:" + messi.goles + "goles")