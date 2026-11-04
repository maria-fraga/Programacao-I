let altura = parseFloat(prompt("Digite sua altura:"));
let sexo = prompt("Sexo feminino ou masculino?");

let pesoIdeal;

if (sexo === "feminino") {
    pesoIdeal = (62.1*altura)-44.7;
} else if (sexo === "masculino") {
    pesoIdeal = (72.7*altura)-58;
} else {
    alert("Sexo inválido! Digite 'feminino' ou 'masculino'.")
}

alert ("Peso ideal:" +pesoIdeal.toFixed(2));