var resposta = document.getElementById('display')
var numeros = []
var resultado = ''
function insert(numero){
    resposta.innerHTML += `${numero}`
    resultado += numero
    numeros.push(numero)

}

function clean(){
    resposta.innerHTML = ''
    resultado = ''
}
function back(){
    resposta.sub
}
function total(){ 
    resposta.innerHTML = eval(resultado)

}
