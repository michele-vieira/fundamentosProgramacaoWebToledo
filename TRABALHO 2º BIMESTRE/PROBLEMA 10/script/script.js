let h3Resultado = document.querySelector('#h3Resultado');
let inputDias = document.querySelector('#inputDias');
let btCalcular = document.querySelector('#btCalcular');

function calcular(){
    let dias = Number(inputDias.value);
    let meses = dias/30;
    let anos = dias/365;

    h3Resultado.innerHTML = 
    "Estamos ha "+ anos.toFixed(0)+" anos, "+ "<br>"+
    meses.toFixed(0)+" meses e "+"<br>"+
    dias.toFixed(0)+" dias sem acidentes!!!"
    
    }
    btCalcular.onclick = function(){
        calcular();
    }