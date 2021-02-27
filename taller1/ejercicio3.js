// Pedir al usuario el número de niños y niñas de un salón, y sacar porcentaje de niños y niñas en un salon
//ejemplo: si en un salon hay 16 niñas, y 4 niños. total 20 (100%), 20% niños y 80% niñas
let ninos = parseInt(prompt("digite la cantidad de niños del salón"));
let ninas = parseInt(prompt("digite la cantidad de niñas del salón"));

let total = ninos+ninas;

let porcentaje_ninos = Math.round((100 * ninos)/total);
let porcentaje_ninas = Math.round((100 * ninas)/total);

alert("en el salón "+ porcentaje_ninos+ "% son niños ");
alert("en el salón "+ porcentaje_ninas+ "% son niñas ");