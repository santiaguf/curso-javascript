//mostrar el menú de un videojuego FUFA21
let opcion;

do {
    console.log("Bienvenidos a FUFA21");
    console.log("1. partido amistoso");
    console.log("2. carrera");
    console.log("3. liga master");
    console.log("4. salir");
    opcion = parseInt(prompt("escoja una opción"));
} while (opcion != 4);