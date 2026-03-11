const demoId = document.getElementById('demo');
//alterar cor da borda
demoId.style.border = '1px solid purple';
const demoClass = document.getElementsByClassName('demo');
//demoClass [indice0, indice1]
for (i=0 ; i < demoClass.length; i++) {
    demoClass[i].style.border = '2px dotted orange';
};

const articleTag = document.getElementsByTagName('article');
for (i=0 ; i < articleTag.length; i++) {
    articleTag[i].style.border = '3px dashed green';
}

const demoQuery = document.querySelector('#demo-query');
demoQuery.style.border = '1px double red';

const demoQueryAll = document.querySelectorAll('.demo-query-all');
demoQueryAll.forEach((caixa) => {
    caixa.style.border = '2px groove blue';
    caixa.style.padding = '10px';
    caixa.style.margin = '5px';
    caixa.style.backgroundColor = 'lightyellow';
    caixa.style.fontFamily = 'Arial, sans-serif';
});
