let peso = parseFloat(prompt("Peso inicial"));
let mais = peso * 1.15;
let menos = peso-(peso*0.20);
alert (`Seu peso caso você engorde 15%: ${mais.toFixed(2)}kg \n Seu peso caso você emagreça 20%: ${menos.toFixed(2)}kg`);