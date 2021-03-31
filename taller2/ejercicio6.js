/*  Felipe va al supermercado a comprar su mercado mensual, el supermercado ofrece un 20% de
descuento si la compra es mayor a 100.000 pesos, pídale al usuario el valor de compra, y si
es mayor a 100.000 , dele el 20% de descuento y muestre el valor final a pagar

entradas: valor a pagar por felipe
salidas: el valor total de compra (sea o no con descuento).

1. pedir a felipe el valor a pagar
2. validar si el valor es mayor a 100k, si es menor o igual, paga el mismo valor,
pero si es mayor, se calcula el valor, y se muestra en pantalla
*/

/* eslint-disable no-alert */
/* eslint-disable no-console */
const valorFactura = window.parseInt(window.prompt('felipe, cuánto es el valor de su factura?'));

if (valorFactura > 100000) {
  const valorConDcto = valorFactura * 0.8;
  console.log(`total a pagar: ${valorConDcto}`);
} else {
  console.log(`total a pagar: ${valorFactura}`);
}
