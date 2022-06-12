let result = document.getElementById('result')


let HandleKeyboard = {
    updateDisplay(){
        if(HandleKeyboard.isMathChar()){
            return; 
        }
        
        let resultArray = result.value.split('')

        resultArray.pop()
        
        resultArray = Format.formatArray(resultArray)
    
        result.value = resultArray
    },
    
    isMathChar(){
        let resultArray = result.value.split('')
        let lastChar = (resultArray[resultArray.length -1])
        let number = parseInt(lastChar)
        if(
           HandleKeyboard.checkMathOperator(lastChar)
     
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

result.addEventListener('keyup',HandleKeyboard.updateDisplay)
