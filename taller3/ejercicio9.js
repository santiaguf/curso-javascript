/* Mostrar en pantalla todos los números terminados en 6 comprendidos entre 25 y 205. */

/* eslint-disable no-alert */
/* eslint-disable no-console */

for (let i = 25; i < 205; i += 1) {
  if (i % 10 === 6) {
    console.log(i);
  }
}
