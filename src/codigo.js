/* eslint-disable no-alert */
/* eslint-disable no-console */

window.alert('hola, voy a calcular cuánto tiempo te falta para pensionarte en Colombia');
const edadPension = 62;
const edadPersona = window.prompt('¿cuál es tu edad?');
const tiempoPension = edadPension - edadPersona;
window.alert(`A usted le faltan ${tiempoPension} años para pensionarse`);
