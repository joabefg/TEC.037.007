// código fonte do access.html: https://codeshare.io/arwEVY
const demoId = document.getElementById('demo'); //Pegando o elemento que corresponde ao ID 'demo'
demoId.style.border = '1px solid purple'; // Alterar a cor da borda

const demoClass = document.getElementsByClassName('demo'); //Pega os elementos, em forma de array, que correspondem a classe 'demo'
// demoClass [indice0, indice1]
for ( i=0; i < demoClass.length; i++ ) { //Itera sobre cada elemento
    demoClass[i].style.border = '2px dotted orange';
}

const articleTag = document.getElementsByTagName('article'); //Pega os elementos, em forma de array, que correspondem a tag 'article'
for (i = 0; i < articleTag.length; i++) { //Itera sobre cada elemento do array
    articleTag[i].style.border = '3px dashed blue'; //Estiliza cada elemento
}

//Pega o elemento que corresponde a query '#demo-query', ou seja, busca por um id 'demo-query'
const demoQuery= document.querySelector('#demo-query');
demoQuery.style.border = '1px solid red';

const demoQueryAll = document.querySelectorAll('.demo-query-all');
demoQueryAll.forEach( //Método do tipo "Array" | permite a execução de funções sobre cada elemento do array | similiar ao for, mas com limitações de controle
    caixa => {
        caixa.style.border = '1px solid green';
        caixa.style.backgroundColor = 'MediumSpringGreen';
        caixa.style.color = 'gray';
        caixa.style.fontFamily = 'glbOpenSans';
    });

function carro(nome) {
    console.log(nome)
}