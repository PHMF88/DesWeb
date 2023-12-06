//vamos fazer uma calculadora
function soma(n1,n2){
    return n1+n2
}
function subt(n1,n2){
    return n1-n2
}
function mult(n1,n2){
    return n1*n2
}
function div(n1,n2){
    return n1/n2
}
console.log("Vamos digitar dois números e realizar operações como eles!")
let n1=Number(prompt("Digite o primeiro número: "))
let n2=Number(prompt("Digite o segundo número: "))
let operacao=prompt("Digite a operação em símbolo(+, -, * ou /): ")
let result
if(operacao=="+"){
 result=soma(n1,n2)   
 console.log(`O resultado da soma é ${result}!`)
} if(operacao=="-"){
    result=subt(n1,n2)
    console.log(`O resultado da subtração é ${result}!`)
} if(operacao=="*"){
    result=mult(n1,n2)
    console.log(`O resultado da multiplicação é ${result}!`)
} if(operacao=="/"){
    if(n2==0){
        console.log("Impossível dividir!")
    } else{
        result=div(n1,n2)
        console.log(`O resultado da divisão é ${result}!`)
    }
}