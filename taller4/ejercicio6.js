/* Leer dos números enteros y almacenar en un vector los 10 primeros números primos
comprendidos entre el menor y el mayor. Luego mostrarlos en pantalla

entradas: dos números, menor y mayor
salidas: vector con los primos */

/* eslint-disable no-alert */
/* eslint-disable no-console */
const menor = parseInt(window.prompt('digite el número menor'), 10);
const mayor = parseInt(window.prompt('digite el número mayor'), 10);
let contadorPrimos = 0;

for (let i = menor; i < mayor; i += 1) {
  const numerito = i;
  let cantDivisores = 0;

  for (let j = 1; j <= numerito; j += 1) {
    if (numerito % j === 0) {
      cantDivisores += 1;
    }
  }

  if (cantDivisores === 2) {
    contadorPrimos += 1;
    console.log(`${numerito} es primo`);
  }

  if (contadorPrimos === 10) {
    break;
  }
}
