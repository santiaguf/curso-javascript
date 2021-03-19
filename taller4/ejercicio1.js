/* 1. Leer 10 enteros, almacenarlos en un vector y determinar en qué posición del vector está el mayor número leído.

ejemplo:
vector = [3,45,5,6,2,4,4,2,6,11];
el mayor número está en la posición 2, pero es el indice 1.

entradas: números del vector. y el vector en sí mismo
salidas: la posición del número mayor.

cómo:
creamos y llenamos el array
creamos una variable llamada mayor, posicion_mayor, indice_mayor. se lo asignamos al primer elemento del vector.
recorremos, y en el recorrido, vamos comparando con el siguiente elemento.
Si el siguiente elemento del vector, es mayor a numero_mayor, entonces reemplazamos numero_mayor con el nuevo valor, y reemplazamos, el indice_mayor y la posicion_mayor. */

//1. creamos el vector vacío.
let vector = [];

//2. llenamos el vector
vector = llenarVector(vector);

//3. asignarle los valores al primer elemento del vector
let numero_mayor = vector[0];
let posicion_mayor = 1;
let indice_mayor = 0;

//4. recorremos el vector y calculamos el número mayor, la posición y el índice
calcularNumeroMayor(vector,numero_mayor,posicion_mayor,indice_mayor);

function llenarVector(vector_funcion){
    for(let i=0; i<10; i++){
        vector_funcion[i] = parseInt(Math.random() * (100 - 0) + 0);
    }
    return vector_funcion;
}

function calcularNumeroMayor(vector,n_mayor,p_mayor,i_mayor){
    for(let i=0; i<vector.length; i++){
        if(vector[i]> n_mayor){
            n_mayor = vector[i];
            i_mayor = i;
            p_mayor = i+1;
        }
    }
    //5. mostramos el resultado
    console.log(vector);
    console.log("el número más grande del vector es: "+n_mayor+" en el índice "+i_mayor+" en la posición "+p_mayor);
}