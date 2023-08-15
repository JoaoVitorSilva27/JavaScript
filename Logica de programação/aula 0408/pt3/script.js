console.log('===== AULA 5 pt3 =====')

let numero = Number(prompt('Digite um numero'))
let contador = 1
let mult2 = false

while (contador <= 100) {
    const mult = contador % numero === 0

    if (mult) {
        console.log(`${contador} é múltiplo de ${numero}`)
        mult2 = true
    }
    contador++
}

if (!mult2) {
    console.log(`Não existem múltiplos de ${numero} entre 1 e 100`)
}