let nProvaTec = parseFloat(prompt("Nota da prova técnica (de 0 à 10):"));
let nEntrevista = parseFloat(prompt("Nota da entrevista (de 0 à 10):"));
let anosExp = parseInt(prompt("Anos de experiência:"));
let resultado;
let media = (nProvaTec+nEntrevista)/2;

if (nProvaTec>=8 && nEntrevista>=8 && anosExp>=2) {
    resultado= "Contratação imediata";
} else if (media>=7 && anosExp>=1) {
    resultado= "Banco de talentos";
} else {
    resultado= "Reprovado.";
}

alert("Média do candidato: "+media.toFixed(2));
alert("Resultado: "+resultado);