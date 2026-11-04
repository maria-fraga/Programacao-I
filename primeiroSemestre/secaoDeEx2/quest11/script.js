let idade = parseInt(prompt("Idade:"));

if (idade <= 12) {
    categoria = "Infaltil";
} else if (idade>= 13 && idade<= 17) {
    categoria = "Juvenil";
} else {
    categoria = "Adulto";
}
alert("Categoria: "+categoria);