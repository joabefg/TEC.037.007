let botao = document.getElementById('botaoCor');

botao.addEventListener('click', () => {
    let corAtual = document.body.style.backgroundColor;
    if(corAtual == 'white'){
        document.body.style.backgroundColor = 'black'
        document.body.style.color = "white"
        console.log(`A cor atual é: ${corAtual}`);
    } else{
        document.body.style.backgroundColor = 'white'
        document.body.style.color = "black"
        console.log(`A cor atual é: ${corAtual}`);
    }
})


// Lista tarefas - Revisão

const formulario = document.getElementById("formulario");
const corpo_tabela = document.getElementById("corpo-tabela");

formulario.onsubmit = (e) =>{
    e.preventDefaul();
}



/*




*/