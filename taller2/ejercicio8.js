/*  pídale al usuario 2 números, si el primero de los dos números es negativo, sume los números y muestre el resultado, y si por el contrario es positivo, réstelos y 
muestre el resultado

entradas: los dos números que brinda el usuario
salidas: el resultado de la operación matemática

solución
1. pedir los números,
2. guardarlos en variables
3. verificar si el 1er número es positivo o negativo (condición)
4. si es negativo, hacer la operación y mostrar en pantalla
5. si es positivo, hacer la operación y mostrar en pantalla
*/

let numero_uno = parseInt(prompt("querido usuario, digite el primer número"));
let numero_dos = parseInt(prompt("ahora, digite el segundo número"));

if(numero_uno < 0){
    let suma = numero_uno + numero_dos;
    console.log("la suma de "+numero_uno+" y "+numero_dos+" es " + suma);
}else{
    let resta = numero_uno - numero_dos;
    console.log("la resta de "+numero_uno+" y "+numero_dos+" es " + resta);
}