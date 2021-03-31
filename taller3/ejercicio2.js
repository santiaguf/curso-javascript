/* Leer un número entero y mostrar todos los pares comprendidos entre 1 y el número leído.
entradas: el número que da el usuario
salidas: el listado de los números. */

/* eslint-disable no-alert */
/* eslint-disable no-console */

const numero = parseInt(window.prompt('diga un número '), 10);

for (let i = 1; i <= numero; i += 1) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
