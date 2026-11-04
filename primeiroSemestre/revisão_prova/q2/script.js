let nPags = parseInt(prompt("Número de páginas:"));
let nCopias = parseInt(prompt("Número de cópias:"));
let custoPag = +prompt("Custo por página impressa:");
let taxa = +prompt("Percentual de taxa adicional:");

let totPagImp = nPags*nCopias;
let custoBase = custoPag*totPagImp;
let valorTaxa = custoBase*(taxa/100);
let custoFinal = valorTaxa+custoBase;

alert ("Total de páginas impressas:"+totPagImp);
alert("O custo base foi de: R$"+custoBase);
alert ("O valor da taxa foi de: R$"+valorTaxa);
alert("O custo final foi de: R$"+custoFinal);
// 10,2,0.50,10