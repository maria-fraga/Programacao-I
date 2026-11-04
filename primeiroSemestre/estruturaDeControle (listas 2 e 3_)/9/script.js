let dinheiro = parseFloat(prompt("Quantidade de dinheiro existente no caixa da empresa:"));
let produtos = parseInt(prompt("Quantidade de produtos a ser comprada:"));
let precoProduto = parseFloat(prompt("Preço de cada unidade:"));
let total;
let total1;

let oitenta = dinheiro*0.80;
let totalCompra = produtos*precoProduto;

if (totalCompra>oitenta) {
    let total1 = (totalCompra*1.10)/3;
    alert("Total: 3 vezes de R$"+total1.toFixed(2));
} else {
    let total = totalCompra*0.95;
    alert("Total à vista: R$"+total.toFixed(2));
}