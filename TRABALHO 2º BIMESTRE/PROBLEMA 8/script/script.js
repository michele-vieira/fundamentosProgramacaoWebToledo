let inputQuantidadeP = document.querySelector('#inputQuantidadeP');
let inputQuantidadeM = document.querySelector('#inputQuantidadeM');
let inputQuantidadeG = document.querySelector('#inputQuantidadeG');
let btCalcular = document.querySelector('#btCalcular');
let h3ValorVenda = document.querySelector('#h3ValorVenda');

function calcular(){
    let qtddeP = Number(inputQuantidadeP.value);
    let qtddeM = Number(inputQuantidadeM.value);
    let qtddeG = Number(inputQuantidadeG.value);

    let valorP = qtddeP*10;
    let valorM = qtddeM*12;
    let valorG = qtddeG*15;
    let valorVenda = valorP+valorM+valorG;

    h3ValorVenda.innerHTML= "Valor total da venda: R$"+valorVenda.toFixed(2);
}
btCalcular.onclick = function(){
    calcular();
}

