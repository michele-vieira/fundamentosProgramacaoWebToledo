let inputMedida1 = document.querySelector('#inputMedida1');
let inputMedida2 = document.querySelector('#inputMedida2');
let btCalcularArea = document.querySelector('#btCalcularArea');
let h3Resultado = document.querySelector('#h3Resultado');

function calcularArea(){
    let medida1 = Number(inputMedida1.value);
    let medida2 = Number(inputMedida2.value);

    h3Resultado.textContent = "Seu terreno tem "+ medida1 * medida2 +"m2";
}
btCalcularArea.onclick = function(){
    calcularArea();
}