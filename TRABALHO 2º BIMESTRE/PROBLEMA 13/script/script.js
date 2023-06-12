let inputRaio = document.querySelector('#inputRaio');
let btCalcular = document.querySelector('#btCalcular');
let h3Resultado = document.querySelector("#h3Resultado");

function calcular(){
    let raio = Number(inputRaio.value);
    let pi = 314/100;
    let area = pi*(raio*raio);

    h3Resultado.innerHTML=
    "A area da pizza e de: "+area+" cm2"
}
btCalcular.onclick = function(){
    calcular();
}