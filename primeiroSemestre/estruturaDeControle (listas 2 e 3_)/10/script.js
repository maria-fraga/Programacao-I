let salario = parseFloat(prompt("Salário inicial:"));
let novoSalario;
let novoSalario2;
let novoSalario3;

if (salario<1500) {
    let novoSalario = salario*1.15;
    alert ("Novo salário: R$"+novoSalario.toFixed(2));
} else if (1500 <= salario <= 3000) {
    let novoSalario2 = salario*1.10;
    alert ("Novo salário: R$"+novoSalario2.toFixed(2));
} else {
    let novoSalario3 = salario*1.05;
    alert("Novo salário: R$"+novoSalario3.toFixed(2));
}