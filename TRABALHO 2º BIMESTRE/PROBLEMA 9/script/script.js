let vlrXa = document.querySelector('#vlrXa');
let vlrYa = document.querySelector('#vlrYa');
let vlrXb = document.querySelector('#vlrXb');
let vlrYb = document.querySelector('#vlrYb');
let btCalcularDistancia = document.querySelector('#btCalcularDistancia');
let h3DistanciaEntrePontos = document.querySelector('#h3distanciaEntrePontos');

function calcular(){
    let valorXa = Number(vlrXa.value);
    let valorYa = Number(vlrYa.value);
    let valorXb = Number(vlrXb.value);
    let valorYb = Number(vlrYb.value);

    let distancia= ((valorXb-valorXa)*(valorXb-valorXa))+((valorYb-valorYa)*(valorYb-valorYa));
    h3DistanciaEntrePontos.innerHTML =
    "A distancia entre os pontos A e B e de: "+Math.sqrt(distancia).toFixed(4);
}
btCalcularDistancia.onclick = function(){
    calcular();
}
