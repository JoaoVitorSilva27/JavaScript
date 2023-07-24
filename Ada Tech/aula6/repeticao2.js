console.clear()

const input = require('readline-sync')

//  Laço Numerico

const nota1 = Number(input.question('Primeira nota: '))
const nota2 = Number(input.question('Segunda nota: '))
const nota3 = Number(input.question('Terceira nota: '))

let media =(nota1 + nota2 + nota3)
console.log(media)

//Acumulador

let acumulador = 0

acumulador = acumulador + 10

acumulador = acumulador + 7

console.log(acumulador)


// FOR
 
console.clear()

for (let i = 0; i <= 10; i++){
    console.log('repetição', i)
}
    
console.clear()

for (let i = 10; i >= 7; i--){
    console.log('repetição', i)
}

console.clear
// Resolvendo o problema da media

let nota 
let soma = 0

for (let i = 1; i <= 3; i++) {
    nota = Number(input.question(`Nota ${i}: `))

    soma = soma + nota
}
console.log(soma / 3)
