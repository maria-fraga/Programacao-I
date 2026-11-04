let salario = parseFloat(prompt("Salário:"));
let imposto;
 
if (salario <= 2500) {
    imposto = 0;
} else if (salario <= 5000) {
    imposto = salario*0.15;
} else if (salario > 5000) {
    imposto = salario*0.27;
}

alert("Valor do imposto: R$"+imposto.toFixed(2));