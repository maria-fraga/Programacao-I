let idade = 19;

if (idade == 19) {
    console.log ("A idade é = 19");
}

if (idade == 25) {
    console.log("A idade é maior que 25")
}

let nome = "Mari";
if (nome == "Mari" && idade > 15) {
    console.log("Liberado!");
}

let passaporte = true;
if ((nome == "Mari" && idade > 15) || passaporte == true) {
    console.log ("liberado 2");
}