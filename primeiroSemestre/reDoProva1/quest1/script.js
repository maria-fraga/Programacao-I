let volumeInicial = parseFloat(prompt("Volume inicial (em litros):"));
let litrosAdHora = parseFloat(prompt("Litros adicionados por hora:"));
let tempoAbastecimento = parseFloat(prompt("Tempo de abastecimento (em horas):"));
let volumeFinal = tempoAbastecimento*litrosAdHora;
let volumeFinalOfc = volumeFinal+volumeInicial;
alert ("Volume final do reservatório: "+volumeFinalOfc.toFixed(2));