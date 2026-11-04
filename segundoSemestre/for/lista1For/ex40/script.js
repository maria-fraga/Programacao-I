let lotes;
let total = 0;
let maior = 0;
let lista = [];

for (let i = 1; i <= 10; i++) {
  do {
    lotes = parseInt(prompt("Quantidade de unidades no lote " + i));
  } while (lotes < 0);
  total = lotes + total;

  if (lotes >= 1000) {
    maior++;
  }

  lista.push(lotes);
}
let posi = lista.indexOf(Math.max(...lista));
let maiorN = Math.max(...lista);
console.log(
  "total: " +
    total +
    "\nMaiores que mil: " +
    maior +
    "\nMaior lote: " +
    "\nPosição: " +
    posi +
    "\nQuantidade: " +
    maiorN,
);
