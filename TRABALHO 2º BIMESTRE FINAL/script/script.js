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
let inputCavalos = document.querySelector('#inputCavalos');
let btCalcularFerraduras = document.querySelector('#btCalcularFerraduras');
let h3TotalFerraduras = document.querySelector('#h3TotalFerraduras');

function calcularFerraduras(){
    let totalFerraduras = Number(inputCavalos.value);

    h3TotalFerraduras.innerHTML = totalFerraduras*4;
}
btCalcularFerraduras.onclick = function(){
    calcularFerraduras();
}

let inputPaes = document.querySelector('#inputPaes');
let inputBroas = document.querySelector('#inputBroas');
let btCalcular = document.querySelector('#btCalcular');
let h3ResultadoCaixa = document.querySelector('#h3ResultadoCaixa');

function calcularCaixa(){
    let paes = Number(inputPaes.value);
    let broas = Number(inputBroas.value);
    let vendaTotal = (paes*(12/100))+(broas*(150/100));
    let poupanca = vendaTotal*(10/100);

    h3ResultadoCaixa.innerHTML = 
    "Venda total do dia: R$"+vendaTotal.toFixed(2)+"<br>"+
    "Valor do dia a poupar: R$"+poupanca.toFixed(2);
}
btCalcular.onclick = function(){
    calcularCaixa();
}
let inputNome = document.querySelector('#inputNome');
let inputIdade = document.querySelector('#inputIdade');
let btDias = document.querySelector('#btDias');
let h3QtsDias = document.querySelector('#h3QtsDias');

function calcularDias(){
    let nome = String(inputNome.value);
    let idade = Number(inputIdade.value);
    let resultado = idade * 365;

    h3QtsDias.innerHTML = nome + " voce ja viveu "+ resultado +" dias!!!";

}
btDias.onclick = function(){
    calcularDias();
}

let inputPrecoLitro = document.querySelector('#inputPrecoLitro');
let inputXisQtd = document.querySelector('#inputXisQtd');
let btClrGasolina = document.querySelector('#btClrGasolina');
let h3Gasolina = document.querySelector('#h3Gasolina');

function calcular(){
    let precoLitro = Number(inputPrecoLitro.value);
    let reais = Number(inputXisQtd.value);
    let litrosAbst = reais/precoLitro;
    let valorPgt = litrosAbst*precoLitro;
    h3Gasolina.innerHTML = 
    "Quantidade de litros abastecido: "+litrosAbst.toFixed(0)+" litros"+"<br>"+
    "Valor do pagamento: "+valorPgt.toFixed(2);
}
btClrGasolina.onclick = function(){
    calcular();
}

let inputPeso = document.querySelector('#inputPeso');
let btVlrPagar = document.querySelector('#btVlrPagar');
let h3ValorFinal = document.querySelector('#h3ValorFinal');


function calular(){
    let peso = Number(inputPeso.value);
    let valorFinal = peso*12;

    h3ValorFinal.innerHTML = 
    "Valor total a pagar pela refeicao: R$"+valorFinal.toFixed(2);

}
btVlrPagar.onclick = function(){
    calular();
}
let inputDias = document.querySelector('#inputDias');
let inputMes = document.querySelector('#inputMes');
let btContarDias = document.querySelector('#btContarDias');
let h3ContarDias = document.querySelector('#h3ContarDias');

function contador(){
    let qtdDias = Number(inputDias.value);
    let nmrMes = Number(inputMes.value);
    let resultado = (nmrMes-1)*30 + qtdDias;

    h3ContarDias.innerHTML=
    "A quantidade de dias ate a referida data e de: "+resultado;
}
btContarDias.onclick = function(){
    contador();
}

let inputQuantidadeP = document.querySelector('#inputQuantidadeP');
let inputQuantidadeM = document.querySelector('#inputQuantidadeM');
let inputQuantidadeG = document.querySelector('#inputQuantidadeG');
let btVlrVenda = document.querySelector('#btVlrVenda');
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
btVlrVenda.onclick = function(){
    calcular();
}

let vlrXa = document.querySelector('#vlrXa');
let vlrYa = document.querySelector('#vlrYa');
let vlrXb = document.querySelector('#vlrXb');
let vlrYb = document.querySelector('#vlrYb');
let btCalcularDistancia = document.querySelector('#btCalcularDistancia');
let h3DistanciaEntrePontos = document.querySelector('#h3distanciaEntrePontos');

function distpontos(){
    let valorXa = Number(vlrXa.value);
    let valorYa = Number(vlrYa.value);
    let valorXb = Number(vlrXb.value);
    let valorYb = Number(vlrYb.value);

    let distancia= ((valorXb-valorXa)*(valorXb-valorXa))+((valorYb-valorYa)*(valorYb-valorYa));
    h3DistanciaEntrePontos.innerHTML =
    "A distancia entre os pontos A e B e de: "+Math.sqrt(distancia).toFixed(4);
}
btCalcularDistancia.onclick = function(){
    distpontos();
}

let h3DiasSemAcidentes = document.querySelector('#h3DiasSemAcidentes');
let btDiasSemAcidentes = document.querySelector('#btDiasSemAcidentes');
let inputTempo = document.querySelector('#inputTempo');

function tempo(){
    let dias = Number(inputTempo.value);
    let meses = dias/30;
    let anos = dias/365;

    h3DiasSemAcidentes.innerHTML = 
    "Estamos ha "+ anos.toFixed(0)+" anos, "+ "<br>"+
    meses.toFixed(0)+" meses e "+"<br>"+
    dias.toFixed(0)+" dias sem acidentes!!!"
    
    }
    btDiasSemAcidentes.onclick = function(){
        tempo();
    }
let inputSalarioInicial = document.querySelector('#inputSalarioInicial');
let inputSalarioComAumento = document.querySelector('#inputSalarioComAumento');
let inputSalarioComDesconto = document.querySelector('#inputSalarioComDesconto');
let btCalcularSalario = document.querySelector('#btCalcularSalario');

function salarinho(){
    let salarioInicial = Number(inputSalarioInicial.value);
    let salarioComAumento = salarioInicial+(salarioInicial*(15/100));
    let salarioComDesconto = salarioComAumento-(salarioComAumento*(8/100));
    inputSalarioComAumento.value = salarioComAumento;
    inputSalarioComDesconto.value = salarioComDesconto;


}
btCalcularSalario.onclick = function(){
    salarinho();
}
let inputNumero = document.querySelector('#inputNumero');
let btCentDezUnd = document.querySelector('#btCentDezUnd');
let h3CentDezUnd = document.querySelector('#h3CentDezUnd');

function centdezund(){
    let numero = Number(inputNumero.value);
    let centena = numero/100;
    let dezena = numero/10;
    let unidade = numero;

    h3CentDezUnd.innerHTML = 
    numero+" E IGUAL A  "+centena+" CENTENAS = "+dezena+" DEZENAS = "+unidade+" UNIDADES";
}
btCentDezUnd.onclick = function(){
    centdezund();
}
let inputRaio = document.querySelector('#inputRaio');
let btCalcularRaio = document.querySelector('#btCalcularRaio');
let h3Raio = document.querySelector("#h3Raio");

function calcular(){
    let raio = Number(inputRaio.value);
    let pi = 314/100;
    let area = pi*(raio*raio);

    h3Raio.innerHTML=
    "A area da pizza e de: "+area+" cm2"
}
btCalcularRaio.onclick = function(){
    calcular();
}
let inputValorConta = document.querySelector('#inputValorConta');
let btDvsConta = document.querySelector('#btDvsConta');
let h3DvsConta = document.querySelector('#h3DvsConta');

function dvsconta(){
    let valorConta = Number(inputValorConta.value);
    let cliente1 = valorConta/3;
    let cliente2 = valorConta/3;
    let cliente3 = valorConta/3;


    h3DvsConta.innerHTML = 
    "CLIENTE 1: R$"+cliente1.toFixed(0)+"<br>"+
    "CLIENTE 2: R$"+cliente2.toFixed(0)+"<br>"+
    "CLIENTE 3: R$"+cliente3.toFixed(2);
}
btDvsConta.onclick = function(){
    dvsconta ();
}