/* eslint-disable no-alert */
/* eslint-disable no-console */
window.alert('hola, voy a calcular tu edad a partir de tu año de nacimiento');
const anhoNacimiento = window.prompt('en qué año naciste?');
const anhoActual = 2021;

function CalcularEdad(actual, nacimiento) {
  const edad = actual - nacimiento;
  console.info(`Tu tienes ${edad} años`);
}

CalcularEdad(anhoActual, anhoNacimiento);
