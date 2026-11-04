let idade = +prompt("Idade do motorista:");
let acidentes = +prompt("Número de acidentes:");
let itensSeguranca = prompt("Tem ABS e Airbag?");

let valorMensal;
let mensagem;

// riscoAlto
if ((idade<25)|| (acidentes >2)) {
    mensagem = "Perfil de Risco Alto.";
    valorMensal = 450;
    if (itensSeguranca == "não") {
        valorMensal = 550;
    }
} else if ((idade>=25 && acidentes == 1 || acidentes == 2) || (idade<25 && acidentes==0)) {
    mensagem = "Perfil de risco moderado.";
    if (itensSeguranca == "sim") {
        valorMensal = 270;
    }
} else if (idade>=25 && acidentes == 0) {
    mensagem = "Perfil de Risco Baixo (Excelente Condutor)."
// terminar ultimo caso