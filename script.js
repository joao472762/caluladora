var resposta = document.getElementById('display')
var numeros = []

function handleAddNumber(number){
    display.textContent += number

}
let parentheseCount = 0

function clean(){
    display.textContent = ''
}
function back(){
    let display = document.getElementById('display')
    let newDisplay = display.textContent.substring(0, display.textContent.length - 1);
    
    display.textContent = newDisplay
   

}
function total(){ 
    resposta.innerHTML = eval(display.textContent)

}
