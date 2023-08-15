console.clear()
console.log('===== AULA 6 =====')

// for (inicio (geralmente uma variavel), condição (ex: let1 <= let2), expressao (ex: let1 ++) ){}

// for (let indice = 0; indice <= 100 ; indice ++ ) {
//     if (indice % 2 === 0) {
//         console.log(indice)
//     }
// }

// const lista = ['banana', 'maça', 'farofa', 'caramao']

// for (let indice = 0; indice < lista.length; indice++) {
//     const elemento = lista[indice];
//     console.log(elemento)
// }

// const matriz = [
//     [1,2,3],
//     [4,5,6],
//     [ "Joao", "Maria", "jose" ]
// ]

// for (let index = 0; index < matriz.length; index++) {
//     const elemento = matriz[index];
//     console.log(elemento)

//     for (let indice = 0; indice < elemento.length; indice++) {
//         const element = elemento[indice];
//         console.log(element)
//     }
// }


/* NUMEROS PRIMOS

for (let numero = 2; numero <= 100; numero++) {
    let ehprimo = true
    
    for (let primo = 2; primo <= numero / 2; primo++) {
        if (numero % primo === 0) {
            ehprimo = false
            break
        } 
    }
    if (ehprimo) {
        console.log(numero)
    }
}*/

const lista = ['banana', 'maça', 'farofa', 'caramao']

for (const item of lista) {
    console.log(item)
}