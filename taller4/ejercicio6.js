/* Leer dos números enteros y almacenar en un vector los 10 primeros números primos
comprendidos entre el menor y el mayor. Luego mostrarlos en pantalla

entradas: dos números, menor y mayor
salidas: vector con los primos

*/

let menor = parseInt(prompt("digite el número menor"));
let mayor = parseInt(prompt("digite el número mayor"));;
let contador_primos = 0;

for(let i=menor;i<mayor;i++){
    let numerito= i;
    let cant_divisores = 0;

    for(let j=1;j<=numerito;j++){
        if(numerito%j == 0){
            cant_divisores = cant_divisores+1;
        }
    }

    if(cant_divisores == 2){
        contador_primos=contador_primos+1;
        console.log(numerito+" es primo");
    }

    if(contador_primos == 10){
        break;
    }
}