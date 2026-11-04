let type = prompt("Tipo de combustível: (G para gasolina ou E para etanol)")
let capa = parseFloat(prompt("Capacidade do tanque (em litros):"));
let total;

if (type === "G" ) {
    total= capa*5.65;
} else if(type === "E") {
    total = capa*4.38;
} else {
    alert("Dados inválidos!");
}

alert("Total: R$"+total.toFixed(2));