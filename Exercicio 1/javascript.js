clickfundo = 1


function corFundo(){
    if (click ==1){

    
    let fundo = document.querySelector('body')
    fundo.style.backgroundColor = 'black'
    let titulo = document.querySelector('h1')
    titulo.style.color ='white' 
    let p = document.querySelector('p')
    p.style.color='white'   
    click =0
    }
    else {


    }
}

function corTexto(){
let cor = document.querySelector('p')
cor.style.cor = 'blue'
}

function aumentarFont(){
    let fonte = document.querySelectorAll('p')[1]
    if(fonte){
        fonte.style.style.fontSize ='50px'
    }
    }

    