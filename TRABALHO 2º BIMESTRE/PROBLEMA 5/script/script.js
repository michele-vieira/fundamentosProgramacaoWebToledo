let inputPrecoLitro = document.querySelector('#inputPrecoLitro');
let inputXisQtd = document.querySelector('#inputXisQtd');
let btCalcular = document.querySelector('#btCalcular');
let h3Resultado = document.querySelector('#h3Resultado');

function calcular(){
    let precoLitro = Number(inputPrecoLitro.value);
    let reais = Number(inputXisQtd.value);
    let litrosAbst = reais/precoLitro;
    let valorPgt = litrosAbst*precoLitro;
    h3Resultado.innerHTML = 
    "Quantidade de litros abastecido: "+litrosAbst.toFixed(0)+" litros"+"<br>"+
    "Valor do pagamento: "+valorPgt.toFixed(2);
}
btCalcular.onclick = function(){
    calcular();
}