let saldoMedio = parseFloat(prompt("Saldo médio:"));

if (saldoMedio <= 500) {
    alert("Nenhum crédito");
} else if (saldoMedio < 500 && saldoMedio <= 1000) {
    alert("Crédito especial: R$"+ (saldoMedio*0.30).toFixed(2));
} else {
   alert("Crédito especial: R$"+ (saldoMedio*0.50).toFixed(2));
}