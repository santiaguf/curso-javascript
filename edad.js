alert("hola, voy a calcular tu edad a partir de tu año de nacimiento");
let anho_nacimiento = prompt("en qué año naciste?");
let anho_actual = 2021;


CalcularEdad(anho_actual,anho_nacimiento);


function CalcularEdad(actual,nacimiento){
    let edad = actual - nacimiento;
    console.info("Tu tienes " + edad + " años");
}