// la galería, ofrece un descuento en la venta de bananos, de acuerdo a la cantidad, si la persona compra entre 1 y 12 bananos, el precio es de 200 pesos por unidad, si compra entre 13 y 50 bananos, el descuento es del 10%, si compra entre 51 y 300 babanos el descuento es del 15%, y si compra más de 300 bananos es el 20%. preguntar la cantidad de bananos a comprar, y mostrar el valor a pagar, junto con el ahorro por el descuento.
// ejemplo: 5 $1000,  15 bananos (15*200)*0.9 = 2.700, (valor original 3.000, valor con dcto 2.700, me ahorré 300 pesos)

let bananos = parseInt(prompt("cuántos babanos desea?"));
let descuento;

//calculamos el descuento
if(bananos <= 12){
    descuento = 0;
}else if(bananos >= 13 && bananos <= 50){
        descuento = 0.1;
    }else if(bananos >= 51 && bananos <= 300){
            descuento = 0.15;
        }else if(bananos >300){
            descuento = 0.2;
        }

let valor_bananos = 200;
let valor_pago = bananos * valor_bananos;
let valor_dcto = valor_pago*(1-descuento);
let ahorro = valor_pago - valor_dcto;

console.log("valor a pagar: $" +valor_dcto+ " su descuento fue de $" + ahorro);