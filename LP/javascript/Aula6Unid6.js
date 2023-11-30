//aula de vetores - array
let frutas=["Laranja, Maçã, Pêra"]
console.log(frutas)

let tamanho=frutas.length
console.log(tamanho)//vai exibir a quantidade de frutas=3

let frut=frutas[0] 
console.log(frut) //vai exibir a fruta Laranja, q está na posição zero!
for(let i=0; i<tamanho; i++){
    console.log(frutas[i])
}//vai mostrar todos os elementos dentro do vetor: Laranja, Maça, Pêra.
//i começa com 0, é menor que tamanho, q é 3, e depois vai somar mais um (i++), até o tamanho.

//----------------------------------
let carrinho=[]
carrinho.push=["Televisão"]
console.log(carrinho)
carrinho.push=["Geladeria"]//o "push" adiciona elementos no final do vetor.
console.log(carrinho)
carrinho.pop()//o "pop" remove elemento no final do vetor. Aqui vai remover a "Geladeira".
console.log(carrinho)
carrinho.shift()//o "shift" remove elemento no início do vetor. Aqui vai remover a "Televisão".
console.log(carrinho)
carrinho.unshift("Mouse")//o "unshift" adiciona elemento no início do vetor. Aqui vai adicionar o "Mouse" na minha lista.
console.log(carrinho) 
//["Televisão", "Geladeira", "Mouse", "Ipad"] -  vetor unidimensional
let indiceGeladeira=carrinho.indexOf("Geladeira")
console.log(`Índice da geladeira = ${indiceGeladeira}`)//vai mostra que o índice da geladeira é 1 (0,1,2).

let indiceMouse=carrinho.indexOf("Mouse")
console.log(`Índice do Mouse é ${indiceMouse}.`)
carrinho.splice(indiceMouse.1)//vai remover o Mouse. Se eu colocasse "indiceMouse.2", removeria o "Mouse" e o "Ipad".
console.log(carrinho)
carrinho.splice(0, 2)//vai apagar a Geladeira e o Mouse, ou seja, dois elementos a partir do índice 0, q é a Televisão.

//vetor uma única dimensão e matriz duas dimensões
let matriz=[[1,2,3,4],[5,6,7,8],[9,10,11,12]]
console.log(matriz)// aqui é um array bidimensional.
//vai exibir:  
//---[0  1  2  3]-índice coluna
 //0//1  2  3  4
 //1//5  6  7  8 
 //2//9 10 11 12
 //índice linha
 //por exemplo, o elemento 8 está na linha 1 coluna 3
 console.log(matriz[1][3])//vai exibir o número 8
 console.log(matriz[2])//vai exibir todos os números da linha 2.
 for(let i=0;i<3;i++){//exibir uma matriz i<3, 3 linhas
    for(let j=0; j<4;j++){//j-coluna. i<4, 4 colunas.
    console.log(matriz[i][j])
 }
}