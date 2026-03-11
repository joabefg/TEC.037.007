// código fonte do access.html: https://codeshare.io/arwEVY
const demoId = document.getElementById('demo');
// Alterar a cor da borda
demoId.style.border = '1px solid purple';

const demoClass = document.getElementsByClassName('demo');
// demoClass [indice0, indice1]
for (i=0;i<demoClass.length;i++) {
    demoClass[i].style.border = '2px dotted orange';
}

const articleTag = document.getElementsByTagName('article');
for (i = 0; i < articleTag.length; i++) {
    articleTag[i].style.border = '3px dashed blue';
}

const demoQuery= document.querySelector('#demo-query');
demoQuery.style.border = '1px solid red';

const demoQueryAll = 
    document.querySelectorAll('.demo-query-all');
demoQueryAll.forEach(caixa => {
    caixa.style.border = '1px solid green';
    caixa.style.backgroundColor = 'MediumSpringGreen';
    caixa.style.color = 'gray';
    caixa.style.fontFamily = 'glbOpenSans';
});