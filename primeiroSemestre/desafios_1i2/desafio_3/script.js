let salarioBase = parseFloat(prompt("Salário-base"));
let imposto = salarioBase * 0.10;
let gratificacao = 50.00;

let salarioFinal = salarioBase - imposto + gratificacao;

alert("Salário a receber: R$" + salarioFinal.toFixed(2));