
function calcular(){
let n1 = Number(document.getElementById("n1").value);
let operacao = document.getElementById("operacao").value;
let n2 = Number(document.getElementById("n2").value);
let resultadoTela = document.getElementById("resultado");

    resultadoTela.innerText = `Bem vindo a calculadora Online!`;

        operacao = operacao.toLowerCase()
        if(isNaN(n1) || isNaN(n2)){
            resultadoTela.innerHTML = "Número inválido,digite novamente !"
            return;
        }
         else if( operacao == "+"){
            let result = n1 + n2 ;
            resultadoTela.innerText = `${n1} + ${n2} = ${result.toFixed(1)}`;
        } else if (operacao == "-"){
            let result = n1 - n2 ;
            resultadoTela.innerText = `${n1} - ${n2} = ${result.toFixed(1)}`;
        // || --> significa or (ou)/ se operacao for igual a X ou x 
        } else if (operacao == "x" || operacao == "*"){
            let result = n1 * n2 ;
            resultadoTela.innerText = `${n1} X ${n2} = ${result.toFixed(1)}`;
        } else if (operacao == "/") {
            let result = n1 / n2;
            resultadoTela.innerText =  `${n1}/${n2} = ${result.toFixed(1)}` ;
        } else if (operacao == "^" || operacao == "**"){
            let result = n1 ** n2 ;
            resultadoTela.innerText = `${n1} elevado a ${n2} = ${result.toFixed(1)}`;  
        // && --> "e"/ se operacao for divisão e n2 = 0 ...
        if (operacao == "/" && n2 == 0) {
        resultadoTela.innerText = "Não pode dividir por zero!";
        return;
}   
 }
}
