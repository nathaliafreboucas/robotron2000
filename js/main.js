// controle de + ou -
const controleAjuste = document.querySelectorAll('[data-controle]');
const estatistica = document.querySelectorAll('[data-estatistica]');
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

function manipulaDados(textoAlvoClicado, paiDoAlvoClicado){
    
    /*o paiDoAlvoClicado é uma div completa(class='controle'), nesse caso eu busquei a classe controle-contador que estava dentro da div 
    da div com a class controle*/
    const pecaDoRobotron = paiDoAlvoClicado.querySelector('[data-contador]');

    if(textoAlvoClicado === '+'){
        pecaDoRobotron.value = parseInt(pecaDoRobotron.value) + 1;
    }else{
        pecaDoRobotron.value = parseInt(pecaDoRobotron.value) - 1;
    }
}

function atualizaEstatistica(peca){
    estatistica.forEach((elemento)=>{
        elemento.textContent = parseInt(elemento.textContent)+pecas[peca][elemento.dataset.estatistica]
    })
}

controleAjuste.forEach( (element) => {
    
    //escutador de evento em cada elemento de controle de ajuste, no caso, click
    element.addEventListener('click', (evento)=>{

        /* parentNode é o pai do elemento clicado */
        const paiDoAlvoClicado = evento.target.parentNode;
        const dataAttributesDoAlvoClicado = evento.target.dataset.controle;
        
        manipulaDados(dataAttributesDoAlvoClicado, paiDoAlvoClicado);
        atualizaEstatistica(evento.target.dataset.peca);
    })   
});


