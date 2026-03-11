let botao = document.getElementById("botaoCor");
botao.addEventListener("click", () => {
    let corAtual = document.body.style.backgroundColor;
        document.body.style.backgroundColor = corAtual === 'lightblue' ? 'lightpink' : 'lightblue' ;
    // document.body.style.backgroundColor = 'lightblue';

});