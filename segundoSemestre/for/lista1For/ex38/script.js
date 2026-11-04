let peso;
let lista = [];
for (let i = 1; i <= 6; i++) {
  peso = +prompt("Digite o peso do lote: " + i);
  lista.push(peso);
}
console.log("Maior :" + Math.max(...lista) + "\nMenor :" + Math.min(...lista));
