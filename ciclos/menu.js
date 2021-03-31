// mostrar el menú de un videojuego FUFA21

/* eslint-disable no-alert */
/* eslint-disable no-console */

let opcion;

do {
  console.log('Bienvenidos a FUFA21');
  console.log('1. partido amistoso');
  console.log('2. carrera');
  console.log('3. liga master');
  console.log('4. salir');
  opcion = parseInt(window.prompt('escoja una opción'), 10);
} while (opcion !== 4);
