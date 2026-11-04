let numero;
let multiplicador = 0;
do {
  numero = prompt(
    "Qual número você deseja saber a tabuada? Se não quiser continuar, digite ''sair''.",
  );
  if (isNaN(numero) || numero <= 0) {
    alert("Valor inválido!");
  }
} while (isNaN(numero) || numero <= 0);

do {
  multiplicador++;
  console.log(numero + " x " + multiplicador + " = " + multiplicador * numero);
} while (multiplicador < 10);