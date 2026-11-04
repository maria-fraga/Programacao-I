let diasUsoMes = parseInt(prompt("Número de dias de uso no mês:"));
let horasUsodia = +prompt("Horas de uso por dia");
let consumo = +prompt("Consumo do equipamento (kwh por hora:");
let custo = +prompt("Custo do kwh;");
let taxaMensal = +prompt("Taxa fixa mensal de manutenção:");

let totalHoras = diasUsoMes*horasUsodia;
let consumoTotal = totalHoras*consumo;
let custoEnergia = consumoTotal*custo;
let custoTotal = custoEnergia + taxaMensal;

alert ("Total de horas:"+totalHoras.toFixed(2));
alert("Consumo total de energia:"+consumoTotal.toFixed(2));
alert("Custo total: R$"+custoTotal.toFixed(2));
alert("Custo energia: R$"+custoEnergia.toFixed(2));