let cofre = parseFloat (prompt("Quantidade em dólares guardados no cofre:"));
let cot = parseFloat (prompt("Cotação de hoje:"));
let tot = cofre*cot;
alert ("Valor em reais: R$"+tot.toFixed(2));