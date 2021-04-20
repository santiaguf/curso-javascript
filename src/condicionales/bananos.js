/* la galería, ofrece un descuento en la venta de bananos, de acuerdo a la cantidad
si la persona compra entre 1 y 12 bananos, el precio es de 200 pesos por unidad,
si compra entre 13 y 50 bananos, el descuento es del 10%,
si compra entre 51 y 300 babanos el descuento es del 15%, y si compra más de 300
bananos es el 20%. preguntar la cantidad de bananos a comprar, y mostrar el valor a
pagar, junto con el ahorro por el descuento. ejemplo: 5 $1000,  15 bananos (15*200
*0.9 = 2.700, (valor original 3.000, valor con dcto 2.700, me ahorré 300 pesos) */

/* eslint-disable no-alert */
/* eslint-disable no-console */
const bananos = parseInt(window.prompt('cuántos babanos desea?'), 10);
let descuento;

// calculamos el descuento
if (bananos <= 12) {
  descuento = 0;
} else if (bananos >= 13 && bananos <= 50) {
  descuento = 0.1;
} else if (bananos >= 51 && bananos <= 300) {
  descuento = 0.15;
} else if (bananos > 300) {
  descuento = 0.2;
}

const valorBananos = 200;
const valorPago = bananos * valorBananos;
const valorDcto = valorPago * (1 - descuento);
const ahorro = valorPago - valorDcto;

console.log(`valor a pagar: $ ${valorDcto} su descuento fue de $ ${ahorro}`);
