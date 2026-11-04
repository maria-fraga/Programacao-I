let salMens = parseFloat(prompt("Salário mensal do cliente:"));
let prestacao = parseFloat(prompt("Valor da prestação:"));
let tempoEmprego = parseFloat(prompt("Tempo de emprego atual (em anos):"));

let trinta = salMens*0.30;
let situacaoFina;
let percentualCompr = ((prestacao/salMens)*100)

if (prestacao <= trinta && tempoEmprego >= 2) {
   situacaoFina = "Aprovado."
} else {
    situacaoFina = "Reprovado."
}

alert("Situação do financiamento: "+situacaoFina);
alert ("Percentual comprometido de renda: "+percentualCompr.toFixed(2)+"%");