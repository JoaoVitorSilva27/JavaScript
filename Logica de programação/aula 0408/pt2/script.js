console.log('===== AULA 5 pt2 =====')

let numero = Number(prompt('Digite um numero'))
let contador = 1
let res = document.getElementById('res')
let mult2 = false

while (contador <= 100) {
    const mult = contador % numero === 0
    if (mult) {
        console.log(contador)
        mult2 = true
        break
    }
    contador++
}

if (!mult2) {
    console.log(`Nao existe multiplo de ${numero} entre 1 e 100`)
}
