

function corFundo(){
let fund = document.querySelector ("body")
let titulo = document.querySelector('h1')
let p = document.querySelector('p')
    if (fund.style.backgroundColor=="white"){


    fund.style.backgroundColor = "black"
    titulo.style.color ="white"
    p.style.color='white'   


    }
    else {
        fund.style.backgroundColor= "white"
        titulo.style.color="black"
        p.style.color="black"




    }
}

function corTexto(){
let cor = document.querySelector('p')
if(cor.style.color == "black"){
cor.style.cor = "blue"
} else{
    cor.style.color = "black"
}
}

function aumentarFont(){
    let p = document.querySelector('p')[1]
    if(p.style.fontSize ="10px"){
        p.style.fontSize ="30px"
    } else {
        p.style.fontSize="10px"
    }
    }
click ==0
function alterarText(){
    let p = document.querySelector('p')
    if(  p = document.querySelector('p')){
    p.innerText= "Até a última terça-feira, pouco mais de um terço do gramado já havia sido recolocado. O trabalho, basicamente, consiste em: máquinas deixam os rolos de grama posicionados para que os funcionários os abram e fixem ao solo. Depois, outro aparelho 'ajeita' os pedaços para não sobrar nenhum espaço entre eles."
    }
    else {
        click ==1
        p=document.querySelector('p')

    }
}

    