//essa função altera o nome da classe onde fica as demais informações do cliente ou procedimento, dessa forma, 
//mostra e esconde a div ao clicar no botão ver mais na aba fichário/procedimentos
function mostrarEsconderInformacoes(elementIdInfo) {
    const elementInfo = document.getElementById(elementIdInfo);
    
    if (elementInfo.className == 'display-block') {
        elementInfo.className = 'display-none'
    } else {
        elementInfo.className = 'display-block'
    }
    
}
