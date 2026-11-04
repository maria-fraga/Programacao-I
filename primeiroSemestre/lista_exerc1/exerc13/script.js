let alturaTijolo = parseInt(prompt("Altura do tijolo:"));
let larguraTijolo = parseInt(prompt("Largura do tijolo:"));
let areaTijolo = larguraTijolo*alturaTijolo;
let larguraParede = parseFloat(prompt("Largura da parede:"));
let alturaParede = parseFloat(prompt("Altura da parede"));
let areaParede = alturaParede*larguraParede;
let areaACobrir = areaParede*0.3;
let total = areaAcobrir/areaTijolo;
alert ("Quantidade:"+total);
// 5, 10, 100, 500
