let consumo;
let continuar;
let fatura;
let somaFatura = 0;
let contFatura = 0;
let somaFAixa4 = 0;
let contFaixa4 = 0;
let contFaixa1 = 0;
let contSobretaxa = 0;

do {
  do {
    consumo = +prompt("Consumo em Kwh:");
    if (consumo < 0 || consumo > 1500) {
      alert("Valor inválido.");
    }
  } while (consumo < 0 || consumo > 1500);

  if (consumo <= 100) {
    fatura = consumo * 1.2;
    contFaixa1++;
  } else if (consumo <= 300) {
    fatura = 100 * 1.2 + (consumo - 300) * 2;
  } else if (consumo <= 600) {
    fatura = 100 * 1.2 + 200 * 2 + (consumo - 300) * 3.5;
  } else {
    fatura = 1570 + (consumo - 600) * 5;
    somaFAixa4 += consumo;
    contFaixa4++;
  }

  if (consumo > 800 || fatura > 2000) {
    fatura = fatura + fatura * 0.5;
    contSobretaxa++;
  }

  somaFatura = somaFatura + fatura;
  contFatura++;

  do {
    continuar = +prompt("Deseja continuar?").toLowerCase();
    if (continuar != "s" && continuar != "n") {
      alert("Valor inválido.");
    }
  } while (continuar != "s" && continuar != "n");
} while (continuar == "S");

let mediaGeral = somaFatura / contFatura;
alert("Média geral das taxas: R$" + mediaGeral.toFixed(2));
let mediaEsp = somaFAixa4 / contFaixa4;
alert("Média do consumo da faixa 4: " + mediaEsp.toFixed(2));
let perc1 = (contFaixa1 / contFatura) * 100;
alert("Percentual da faixa 1: " + perc1.toFixed(2));
let perc2 = (contSobretaxa / contFatura) * 100;
alert("Percentual de motores com sobretaxa: " + perc2.toFixed(2));
