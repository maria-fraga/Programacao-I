let base = +prompt("Base do terreno (em metros):");
let altura = +prompt("Altura do terreno (em metros):");
let precoM2 = +prompt("Preço do metro quadrado:");
let area = (base*altura)/2;
let valorTotal = precoM2*area;
alert ("Area do terreno:"+area.toFixed(2));
alert("Valor total estimado:"+valorTotal.toFixed(2));