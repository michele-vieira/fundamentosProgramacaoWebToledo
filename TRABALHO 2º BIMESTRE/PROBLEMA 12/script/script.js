let inputNumero = document.querySelector('#inputNumero');
let btCalcular = document.querySelector('#btCalcular');
let h3Resultado = document.querySelector('#h3Resultado');

function calcular(){
    let numero = Number(inputNumero.value);
    let centena = numero/100;
    let dezena = numero/10;
    let unidade = numero;

    h3Resultado.innerHTML = 
    numero+" E IGUAL A  "+centena+" CENTENAS = "+dezena+" DEZENAS = "+unidade+" UNIDADES";
}
btCalcular.onclick = function(){
    calcular();
}