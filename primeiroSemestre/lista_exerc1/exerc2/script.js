let valorPago=parseFloat(prompt ("Valor pago:"));
let precoProduto=parseFloat(prompt ("Preço do produto:"));
let Troco = valorPago-precoProduto;
alert (`Troco a ser recebido:R$`+ Troco.toFixed(2));