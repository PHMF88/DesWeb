//procedimento que receba 3 notas de aluno e 1 letra. A calcula a média aritmética; P à média ponderada (peso: 5, 3 e 2) e H à média harmônica.
function media(nota1, nota2, nota3, letra){
    let media
    switch(letra){
        case "A": media=(nota1+nota2+nota3)/3
        break
        case "P": media=(nota1*5+nota2*3+nota3*2)/10
        break
        case "H": media=3/(1/nota1+1/nota2+1/nota3)
        break
        default: console.log("Opção inválida!")
    }
    return media
}
let resultado=media(10,5,3,"K")
console.log(resultado)

//Faça uma função que verifique se um número é perfeito ou não. Um valor é perfeito quando ele é igual a soma dos seus divisores exetuando ele próprio (exemplo: 6 é perfeito, pois 6=1+2+3, que são seu divisores). A função deve retornar um valor booleano.
//verificar se um número é perfeito
function perfeito(num){
    let soma=0
    let resultado
    
    for(let i=1; i < num; i++){
        if(num % i == 0){
            soma = soma + 1
        }
    }
    if(soma == num){
        resultado = true
    } else {
        resultado = false
    }
    return resultado
}
console.log(perfeito(6))
//Obs.: não funcionando