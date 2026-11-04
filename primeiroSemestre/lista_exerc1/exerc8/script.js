let pog = parseFloat(prompt("Preço original do produto:"));
let pcob = parseFloat(prompt("Preço cobrado:"));
let desconto = (pog-pcob) / pog * 100;
alert ("O valor do desconto foi:"+desconto +"%");