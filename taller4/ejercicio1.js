/* 1. Leer 10 enteros, almacenarlos en un vector y
determinar en qué posición del vector está el mayor número leído.

ejemplo:
vector = [3,45,5,6,2,4,4,2,6,11];
el mayor número está en la posición 2, pero es el indice 1.

entradas: números del vector. y el vector en sí mismo
salidas: la posición del número mayor.

cómo:
creamos y llenamos el array
creamos una variable llamada mayor, posicionMayor, indiceMayor.
se lo asignamos al primer elemento del vector.
recorremos, y en el recorrido, vamos comparando con el siguiente elemento.
Si el siguiente elemento del vector, es mayor a numeroMayor,
entonces reemplazamos numeroMayor con el nuevo valor, y reemplazamos,
el indiceMayor y la posicionMayor. */

/* eslint-disable no-alert */
/* eslint-disable no-console */

function llenarVector(vectorFuncion) {
  for (let i = 0; i < 10; i += 1) {
    vectorFuncion[i] = parseInt((Math.random() * (100 - 0) + 0), 10);
  }
  return vectorFuncion;
}

// 1. creamos el vector vacío.
let vector = [];

// 2. llenamos el vector
vector = llenarVector(vector);

// 3. asignarle los valores al primer elemento del vector
const numeroMayor = vector[0];
const posicionMayor = 1;
const indiceMayor = 0;

function calcularNumeroMayor(vectorCompleto, numMayor, posMayor, idxMayor) {
  for (let i = 0; i < vectorCompleto.length; i += 1) {
    if (vectorCompleto[i] > numMayor) {
      numMayor = vectorCompleto[i];
      idxMayor = i;
      posMayor = i + 1;
    }
  }

  // 5. mostramos el resultado
  console.log(vector);
  console.log(`el número más grande del vector es: ${numMayor} en el índice ${idxMayor} en la posición ${posMayor}`);
}

// 4. recorremos el vector y calculamos el número mayor, la posición y el índice
calcularNumeroMayor(vector, numeroMayor, posicionMayor, indiceMayor);
