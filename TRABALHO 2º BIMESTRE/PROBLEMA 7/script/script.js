let inputDias = document.querySelector('#inputDias');
let inputMes = document.querySelector('#inputMes');
let btCalcular = document.querySelector('#btCalcular');
let h3Resultado = document.querySelector('#h3Resultado');

function calcular(){
    let qtdDias = Number(inputDias.value);
    let nmrMes = Number(inputMes.value);
    let resultado = (nmrMes-1)*30 + qtdDias;

    h3Resultado.innerHTML=
    "A quantidade de dias ate a referida data e de: "+resultado;
}
btCalcular.onclick = function(){
    calcular();
}