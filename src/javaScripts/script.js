let result = document.getElementById('result')


let HandleKeyboard = {
    updateDisplay(){

        let resultArray = result.value.split(separator='')

        for(key in resultArray){
        if(!HandleKeyboard.isMathChar(resultArray[key])){
            resultArray.splice(key,1) 
        }
    }
    result.value  = Format.formatArray(resultArray)
    },
    
    isMathChar(char){
        let number = parseInt(char)
        if(
           HandleKeyboard.checkMathOperator(char)
     
        ){
            return true
        }
    
        let stringNumber = number.toString()
    
    
        if(stringNumber == 'NaN'){
            return false
        }
        return true
   
    },
    checkMathOperator(operator = ''){
        if(
            operator == '*' ||
            operator == '/' ||
            operator == '-' ||
            operator == '+'
     
        ){
            return true
        }
        return false
    }

}
let Format = {
     formatArray(array = []){
        let arrayFormated = array.join(separator='')
        arrayFormated = Format.formatString(arrayFormated)
        return arrayFormated
    },
    
    formatString(string = ''){
        let stringFormated = string.replace(/ /g, '')
        return stringFormated
    } 
}

let Dom ={
    handleAddChar(char){
        result.value += char
    },

    deleteAllChars(){
        result.value = ''
    },

    deleteLastChar(){
        let content = result.value
        result.value = content.substring(0, content.length -1)
    },

    handleTotal(){ 
        if(result.value.length === 0){
            return
        }
        result.value = eval(result.value)
    }
    
}

document.body.addEventListener('keydown',  (event)=> {
    const key = event.key;
    const code = event.keyCode;
    if(code === 13){
        Dom.handleTotal()
    }
  });

result.addEventListener('input',HandleKeyboard.updateDisplay)

