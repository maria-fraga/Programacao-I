let idade = parseInt(prompt("Idade"));
let cnh = prompt("Possui CNH?");

if (idade >= 18 && cnh == "sim") {
    alert("Pode dirigir ;)")
} else if (idade >= 18 && cnh == "não" ) {
    alert("Não pode dirigir ;(")
} else {
    alert("Não pode entrar.")
}