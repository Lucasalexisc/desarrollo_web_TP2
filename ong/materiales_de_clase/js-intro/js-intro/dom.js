// METODOS PARA SELECCIONAR ELEMENTOS HTML

// querySelector para un solo elemento
// querySelectorAll para muchos elementos

// let titulo = document.querySelector('h1')  SELECTOR DE TIPO
// let titulo = document.querySelector('.titulo')SELECTOR DE CLASE
// let titulo = document.querySelector('#titulo') SELECTOR DE ID
// console.log(titulo)

// const parrafos = document.querySelectorAll('.parrafo')
// console.log(parrafos)

let titulo = document.querySelector('h1')
titulo.style.backgroundColor = 'red';
titulo.style.color = 'blue';
titulo.textContent = "Hola mundo!"