console.clear()

let notas = [10, 7, 8, 9, 5, 3, 8]
let soma = 0

for(let i = 0; i < notas.length; i++){
    console.log(notas[i])
    soma = soma + notas[i]
}

console.log(soma / 7)