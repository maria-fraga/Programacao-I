let valInicial = prompt("Valor inicial do relógio:");
let valFinal = prompt("Valor final do relógio:");
let valKwh = parseFloat(prompt("Valor do KWh (até 150Kwh):"));
let valTotal= valFinal-valInicial;
let conta;

if (valTotal > 150) {
    conta = (valTotal*valKwh)*1.20;
} else if (valTotal <= 150){
    conta =(valTotal*valKwh)
}

alert ("Total: "+conta);