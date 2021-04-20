/* este ejercicio, es para saber si el año actual,
es igual al año 2020, que fue bisiesto.
*/

/* eslint-disable no-alert */
/* eslint-disable no-console */

// primero pedimos al usuario, el año actual
const anhoActual = window.prompt('en qué año estamos?');

// segundo convertimos el año de string a numérico
const actual = parseInt(anhoActual, 10);

// tercero, creamos la variable del año bisiesto
const anhoBisiesto = 2020;

// cuarto, hacemos la comparación estricta del año actual con el bisiesto
if (actual === anhoBisiesto) {
  console.log('este año tenemos 29 de febrero');
} else {
  console.log('es un año normal');
}
