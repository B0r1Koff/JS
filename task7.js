function strToNumber1(str){
    let numStr = ''
    let num = Number(str)
    if(Object.is(num, NaN)){
        for(let index in str){
            if(parseInt(str[index]) || str[index] === '0'){
                numStr += `${str[index]}`
            }
        }
        return parseInt(numStr)
    }
    else{
       return Number(str)
    }
}

console.log(strToNumber1(str))