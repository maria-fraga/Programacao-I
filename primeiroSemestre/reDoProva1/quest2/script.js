let nDisciplinas = parseFloat(prompt("Número de disciplinas:"));
let horaDiscDia = parseFloat(prompt("Horas de estudo por discipĺina por dia:"));
let nDiasEstudo = parseFloat(prompt("Números de dias de estudo:"));
let horasPorDia = horaDiscDia+nDisciplinas;
let horasPeriodo = horasPorDia*nDiasEstudo;
alert("Total de horas estudadas por dia:"+horasPorDia.toFixed(2));
alert("Total de horas estudadas no período:"+horasPeriodo.toFixed(2));