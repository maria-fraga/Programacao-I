let m1 = parseFloat(prompt("Medida um:"));
let m2 = parseFloat(prompt("Medida dois:"));
let m3 = parseFloat(prompt("Medida três:"));

if (m1+m2 > m3 || m1+m3 > m2 || m2+m3 > m1) {
    alert("É um triângulo.");
} else {
    alert("Não é um triângulo.");
}