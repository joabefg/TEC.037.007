const demoId = document.getElementById('demo');

// Alterar cor da borda
demoId.style.border = '1px solid purple';


const demoClass = document.getElementsByClassName('demo');

for (let i = 0; i < demoClass.length; i++) {

    demoClass[i].style.border = '2px dotted orange';

}


const articleTag = document.getElementsByTagName('article');

for (let i = 0; i < articleTag.length; i++) {

    articleTag[i].style.border = '3px dashed blue';

}


const demoQuery = document.querySelector("#demo-query");

demoQuery.style.border = '1px solid red';


const demoQueryAll = document.querySelectorAll('.demo-query-all');

for (let i = 0; i < demoQueryAll.length; i++) {

    demoQueryAll[i].style.border = '3px solid green';

}

// botao mudar cor
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