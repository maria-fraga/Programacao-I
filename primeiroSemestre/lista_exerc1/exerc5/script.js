let horaPe = parseFloat (prompt("Horas do pedreiro:"));
let horaPi = parseFloat(prompt("Horas do pintor:"));
let ValorPedreiro = horaPe*20;
let valorPintor = horaPi*16;
let total = valorPintor+ValorPedreiro;
alert("Custo do pedreiro:"+ValorPedreiro);
alert("Custo do pintor:"+valorPintor);
alert("Custo total:"+total);
// alert (`o custo com o pedreiro foi: R$ ${valorPedreiro}/n o custo do pintor foi R$:${valorPintor} /n o custo total foi ${total});