/* Leer un número entero y mostrar todos los pares comprendidos entre 1 y el número leído.

entradas: el número que da el usuario
salidas: el listado de los números.

*/

let numero = parseInt(prompt("diga un número "));

for (let i = 1; i <= numero; i++) {
    if(i%2 == 0){
        console.log(i);
    }
}