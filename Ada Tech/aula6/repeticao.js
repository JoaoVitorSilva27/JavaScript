console.clear()

// Laço Condicional

const input = require('readline-sync') 

const numero1 = 5

console.log('Escolha um numero de 1 ate 10')
let numerouser = Number(input.question('Numero escolhido:'))

while (numerouser !== numero1) {
    console.log('Voce errou. Tente novamente')

    numerouser = Number(input.question('Numero escolhido:'))
}

console.log('Voce acertou! Parabens.')
