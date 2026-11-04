let peso;
let multa;
let excesso;

do {
    peso = parseFloat(prompt("Peso de peixes (em Kg):"));
    if (peso < 0 || peso > 150) {
        alert("Valor inválido!");
        alert("informe um valor positivo e mno ou igual a 150kg.");
    }
} while (peso < 0 || peso > 150);


if (peso > 50) {
    excesso = peso-50;
    multa = excesso*8.00;
    alert("Valor da multa: R$"+ multa.toFixed(2));
} else {
    excesso == 0;
    multa = 0;
    alert("Você não pagará multa.");
}