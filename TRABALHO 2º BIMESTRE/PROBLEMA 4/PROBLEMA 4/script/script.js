let inputNome = document.querySelector('#inputNome');
let inputIdade = document.querySelector('#inputIdade');
let btDias = document.querySelector('#btDias');
let h3Resultado = document.querySelector('#h3Resultado');

function calcularDias(){
    let nome = String(inputNome.value);
    let idade = Number(inputIdade.value);
    let resultado = idade * 365;

    h3Resultado.innerHTML = nome + " voce ja viveu "+ resultado +" dias!!!";

}
btDias.onclick = function(){
    calcularDias();
}