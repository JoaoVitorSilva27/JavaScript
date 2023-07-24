console.clear()

// Operadores booleanos

/* 
   Igualdade =          ==
   Desigualdade =       != (diferente)
   Maior que =          >
   Maior ou igual =     >=
   Menor que =          <
   Menor ou igual =     <=
   
   Restritamente igual =  === (mesmo tipo de conteudo e etc)
*/ 

const numero1 = 10

console.log('Igual', numero1 == 10)
console.log('Maior', numero1 > 20)

console.log('restritamente igual', numero1 === '10')

console.log('Diferente', numero1 != 23)
console.log('Restritamente diferente', numero1 !== '10')

// Conjunção logica

//  AND = &&

let idade = 19
let cnh = true

const dirigir = (idade > 18 && cnh === true)
console.log('Posso dirigir?', dirigir)

// OR = ||

idade = 40
const voto = idade < 18 || idade >= 70

// NOT = !

const gostando = false

console.log(!gostando)