
let visor = document.getElementById("visor")

function tecla (valor){
    if (visor.innerText == "0"){
       visor.innerText = valor;
    } else{
        visor.innerText += valor;
    }
}

function calcular() {
    try {
        let resultado = eval(visor.innerText);
        visor.innerText = resultado;
    } catch {
        visor.innerText = "Erro";
    }
}

function limpar() {
    visor.innerText = "0";
}