let inputPeso = document.querySelector('#inputPeso');
let btCalular = document.querySelector('#btCalular');
let h3ValorFinal = document.querySelector('#h3ValorFinal');


function calular(){
    let peso = Number(inputPeso.value);
    let valorFinal = peso*12;

    h3ValorFinal.innerHTML = 
    "Valor total a pagar pela refeicao: R$"+valorFinal.toFixed(2);

}
btCalular.onclick = function(){
    calular();
}