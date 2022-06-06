let Dom ={
    handleAddChar(char){
        result.textContent += char
    },

    deleteAllChars(){
        result.textContent = ''
    },

    deleteLastChar(){
        let content = result.textContent
        result.textContent = content.substring(0, content.length -1)
    },

    handleTotal(){ 
        if(result.textContent.length === 0){
            return
        }
        result.innerHTML = eval(result.textContent)
    }
    
}

