let numero;
let multiplicador = 0;
do {
  numero = prompt("Qual número você deseja saber a tabuada?");
  if (isNaN(numero) || numero <= 0) {
    alert("Valor inválido!");
  }
} while (isNaN(numero) || numero <= 0);

for (let i = 1; i <= 10; i++) {
  console.log(numero + " x " + i + " = " + i * numero);
}