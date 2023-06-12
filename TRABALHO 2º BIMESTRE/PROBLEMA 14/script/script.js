let inputValorConta = document.querySelector('#inputValorConta');
let btCalcular = document.querySelector('#btCalcular');
let h3Resultado = document.querySelector('#h3Resultado');

function calcular(){
    let valorConta = Number(inputValorConta.value);
    let cliente1 = valorConta/3;
    let cliente2 = valorConta/3;
    let cliente3 = valorConta/3;


    h3Resultado.innerHTML = 
    "CLIENTE 1: R$"+cliente1.toFixed(0)+"<br>"+
    "CLIENTE 2: R$"+cliente2.toFixed(0)+"<br>"+
    "CLIENTE 3: R$"+cliente3.toFixed(2);
}
btCalcular.onclick = function(){
    calcular ();
}