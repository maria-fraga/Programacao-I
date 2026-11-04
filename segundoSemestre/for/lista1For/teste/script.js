let notas = [];
let soma = 0;
let quantProvas = parseInt(prompt('Quantas provas foram feitas?'));

for (let i = 1; i <= quantProvas; i++) {
  let notaAtual = parseFloat(prompt('Nota da prova ' + i + ':'));
  notas.push(notaAtual);
  soma += notaAtual;
}

let media = soma / quantProvas;
alert('Sua média foi: ' + media.toFixed(1));

let confirRec = prompt('Houve nota de recuperacao? (sim/nao)').toLowerCase();

if (confirRec === 'sim') {
  let rec = parseFloat(prompt('Qual a nota da rec?'));
  let tipo;
  
  do {
    tipo = parseInt(prompt('Qual o tipo de rec? (Digite 1 ou 2)'));
  } while (tipo !== 1 && tipo !== 2);
  
  if (tipo === 1) {
    let menorNota = Math.min(...notas);
    let menorNotaP = notas.indexOf(menorNota);
    
    if(menorNota < rec) {
    media = (soma - menorNota + rec) / quantProvas;
    }
    
    alert('Sua média final foi: ' + media.toFixed(1) + '\nA nota ' + menorNota + ' da prova ' + (menorNotaP + 1) + ' foi substituída.');
  } else {
    if(media < rec) {
    media = rec;
    }
    alert('Sua média final foi: ' + media.toFixed(1));
  }
}