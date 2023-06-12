let inputCavalos = document.querySelector('#inputCavalos');
let btCalcular = document.querySelector('#btCalcular');
let h3TotalFerraduras = document.querySelector('#h3TotalFerraduras');

function calcularFerraduras(){
    let totalFerraduras = Number(inputCavalos.value);

    h3TotalFerraduras.innerHTML = totalFerraduras*4;
}
btCalcular.onclick = function(){
    calcularFerraduras();
}