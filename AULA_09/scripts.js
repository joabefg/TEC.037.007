let botao = document.getElementById('botaoCor');
botao.addEventListener('click', () => {
    let corAtual = 
        document.body.style.backgroundColor;
    if (corAtual == 'fuchsia') {
        document.body.style.backgroundColor
        = 'blue';
    } else {
        document.body.style.backgroundColor
        = 'fuchsia';
    }
    
});