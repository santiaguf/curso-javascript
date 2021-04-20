// Pedir al usuario el número de niños y niñas de un salón, y sacar porcentaje de niños y niñas en
// un salon ejemplo: si en un salon hay 16 niñas, y 4 niños. total 20 (100%), 20% niños y 80% niñas

/* eslint-disable no-alert */
/* eslint-disable no-console */

function CalcularTotalEstudiantes(ninos, ninas) {
  const total = ninos + ninas;
  return total;
}

const ninos = parseInt(window.prompt('digite la cantidad de niños del salón'), 10);
const ninas = parseInt(window.prompt('digite la cantidad de niñas del salón'), 10);

function CalcularPorcentaje(alumnos, total) {
  const porcentajeEstudiantes = Math.round((100 * alumnos) / total);
  return porcentajeEstudiantes;
}

const totalEstudiantes = CalcularTotalEstudiantes(ninos, ninas);
const PorcNinos = CalcularPorcentaje(ninos, totalEstudiantes);
const PorcNinas = CalcularPorcentaje(ninas, totalEstudiantes);

console.log(`en el salón ${PorcNinos}% son niños`);
console.log(`en el salón ${PorcNinas}% son niñas`);
