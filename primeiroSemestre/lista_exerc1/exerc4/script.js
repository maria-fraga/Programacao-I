let valFin = parseFloat(prompt("Valor pago:"));
let preço = parseFloat (prompt("Preço do quilo:"));
let valpag = valFin/preço;
alert ("Peso consumido:"+valpag.toFixed(3)+ "kg");