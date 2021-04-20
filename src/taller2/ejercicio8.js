/*  pídale al usuario 2 números, si el primero de los dos números es
negativo, sume los números y muestre el resultado, y si por el contrario
es positivo, réstelos y muestre el resultado

entradas: los dos números que brinda el usuario
salidas: el resultado de la operación matemática

solución
1. pedir los números,
2. guardarlos en variables
3. verificar si el 1er número es positivo o negativo (condición)
4. si es negativo, hacer la operación y mostrar en pantalla
5. si es positivo, hacer la operación y mostrar en pantalla
*/

/* eslint-disable no-alert */
/* eslint-disable no-console */

const numeroUno = parseInt(window.prompt('querido usuario, digite el primer número'), 10);
const numeroDos = parseInt(window.prompt('ahora, digite el segundo número'), 10);

if (numeroUno < 0) {
  const suma = numeroUno + numeroDos;
  console.log(`la suma de ${numeroUno} y ${numeroDos} es ${suma}`);
} else {
  const resta = numeroUno - numeroDos;
  console.log(`la resta de ${numeroUno} y ${numeroDos} es ${resta}`);
}
