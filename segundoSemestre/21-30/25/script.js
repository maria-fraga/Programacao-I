let salarioBruto;
let inss;
let salarioLiquido;
let continuar;
let somaSalarioLiquido = 0;
let contaEmpregdos = 0;

do {
    do {
        salarioBruto = parseFloat(prompt("Informe o salário bruto:"));
        if (salarioBruto <= 0 || salarioBruto >= 10000){
            alert("Valor inválido!");
            alert("Informe apenas valores positivos e menores que R$ 10 mil.");
        }
    } while (salarioBruto <= 0 || salarioBruto >= 10000)

    if (salarioBruto <= 1500) {
        inss = salarioBruto * 0.08;
    } else if (salarioBruto <= 3500) {
        inss = salarioBruto * 0.10;
    } else {
        inss = salarioBruto * 0.12;
    }

    salarioLiquido = salarioBruto - inss;
    somaSalarioLiquido = somaSalarioLiquido + salarioLiquido;
    contaEmpregdos = contaEmpregdos + 1;

    salarioLiquido = salarioBruto - inss;
    alert("Salário líquido: R$" + salarioLiquido.toFixed(2));
    continuar = prompt("Deseja continuar? Digite sim ou não").toLowerCase();
} while (continuar == "sim")

let mediaSalario = somaSalarioLiquido/contaEmpregdos;
alert("Média dos salários líquidos: R$" + mediaSalario.toFixed(2));