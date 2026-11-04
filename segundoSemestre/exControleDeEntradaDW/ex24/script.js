let n1 = parseInt(prompt("Primeiro númrto:"));
let n2 = parseInt(prompt("Segundo número:"))
let opr;
do{
opr = prompt("Operação aritmética desejada:");
} while (opr != "+" && opr != "-" && opr != "*" && opr != "/");

switch (opr) {
    case "+":
        alert("A soma dos dois números resultará em: " + (n1 + n2));
        break;
    case "-":
        alert ("A subtração dos dois números resultará em: " + (n1 - n2));
        break;
    case "*":
        alert("A multiplicação dos dois números resultará em: " + (n1*n2));
        break;
    case "/":
        if (n1 >= n2) {
            alert("A divisão resultará em: " + (n1/n2));
        } else {
            alert("A divisão dos dois números resultará em: " + (n2/n1));
        }
        break;
}