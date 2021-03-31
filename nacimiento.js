/* eslint-disable no-alert */
/* eslint-disable no-console */

window.alert('hola, voy a calcular tu año de nacimiento a partir de tu edad');
const edad = window.prompt('qué edad tienes?');
const anhoActual = 2021;
const anhoNacimiento = anhoActual - edad;
window.alert(`naciste en el año ${anhoNacimiento}`);
