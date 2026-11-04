let area = parseFloat(prompt("Área total a ser pintada (em mrtros quadrados):"));
let rendimento = parseFloat(prompt("Rendimento da tinta (em metros quadrados por litro):"));
let vol = parseFloat(prompt("Volumetria da lata de tinta (em litros):"));
let preco = parseFloat(prompt("Preço unitário da lata de tinta:"));
let quantHoras = parseFloat(prompt("Quantidade de horas estimadas para a execução do serviço:"));
let quantPint = parseInt(prompt("Quantidade de pintores alocados na equipe:"));
let valCobradoPPint = parseFloat(prompt("Valor da hora cobrado por pintor:"));
let valReservado = parseFloat(prompt("Orçamento máximo disponível pela família:"));

let litrosTinta = (area/rendimento);
let quantLatas = Math.ceil(litrosTinta/vol);
let custoTotalTinta = (quantLatas*preco);

// 
let custoFinal;
let resto;

let horasPint = (quantHoras*quantPint);
let maoDeObra = (horasPint*valCobradoPPint);

let custoTotal = (maoDeObra+custoTotalTinta);

if (valReservado>=custoTotal) {
    custoFinal = custoTotal*0.05;
    resto = (valReservado-custoFinal);
} 