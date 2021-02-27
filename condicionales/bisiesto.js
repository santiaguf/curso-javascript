/* este ejercicio, es para saber si el año actual,
es igual al año 2020, que fue bisiesto.
*/

// primero pedimos al usuario, el año actual
let anho_actual = prompt("en qué año estamos?");

//segundo convertimos el año de string a numérico
let actual = parseInt(anho_actual);

//tercero, creamos la variable del año bisiesto
let anho_bisiesto = 2020;

//cuarto, hacemos la comparación estricta del año actual con el bisiesto
if(actual === anho_bisiesto){
    console.log("este año tenemos 29 de febrero");
}else {
    console.log("es un año normal");
}