// displayNum = (num) =>{
//     result.value += num
// }
displayNum  = (num) =>{
    if (num === '( ' || num === ')') {
        result.value += num;
    } else {
        result.value += num.toString();
    }
}
evaluateExpression = () =>{
    // expr = result.value
    // op = eval(expr)
    // result.value = op
    result.value = eval(result.value)
}
allClearFun = () =>{
    result.value = ''
}
backFun = () =>{
    s = result.value
    result.value =  s.slice(0,-1)
}