let valorQuilo = parseFloat(prompt ("Valor do Quilo"));
let quantProd = parseFloat(prompt("Quantidade do produto"));
let valorPago = valorQuilo*quantProd;
alert(`Valor a ser pago  R$`+ valorPago.toFixed(2));