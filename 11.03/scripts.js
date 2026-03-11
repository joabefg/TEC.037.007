let botao = document.getElementById("BotaoCor");
botao.addEventListener('click', () => {

    let corLetra = document.body.style.color;
    console.log(corLetra);
    let corAtual = document.body.style.backgroundColor;
    console.log(corAtual);
    

    if(corAtual === "white"){

        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
    }else{

         document.body.style.backgroundColor = "white";
         document.body.style.color = "black";

    }
    

});