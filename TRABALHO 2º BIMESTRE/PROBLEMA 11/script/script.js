let inputSalarioInicial = document.querySelector('#inputSalarioInicial');
let inputSalarioComAumento = document.querySelector('#inputSalarioComAumento');
let inputSalarioComDesconto = document.querySelector('#inputSalarioComDesconto');
let btCalcular = document.querySelector('#btCalcular');

function calcular(){
    let salarioInicial = Number(inputSalarioInicial.value);
    let salarioComAumento = salarioInicial+(salarioInicial*(15/100));
    let salarioComDesconto = salarioComAumento-(salarioComAumento*(8/100));
    inputSalarioComAumento.value = salarioComAumento;
    inputSalarioComDesconto.value = salarioComDesconto;


}
btCalcular.onclick = function(){
    calcular();
}