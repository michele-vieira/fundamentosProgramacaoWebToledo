let inputPaes = document.querySelector('#inputPaes');
let inputBroas = document.querySelector('#inputBroas');
let btCalcular = document.querySelector('#btCalcular');
let h3Resultado = document.querySelector('#h3Resultado');

function calcular(){
    let paes = Number(inputPaes.value);
    let broas = Number(inputBroas.value);
    let vendaTotal = (paes*(12/100))+(broas*(150/100));
    let poupanca = vendaTotal*(10/100);

    h3Resultado.innerHTML = 
    "Venda total do dia: R$"+vendaTotal.toFixed(2)+"<br>"+
    "Valor do dia a poupar: R$"+poupanca.toFixed(2);
}
btCalcular.onclick = function(){
    calcular();
}