console.clear()

// Arrays

let arr = ['João', 19, 1.80]

console.log(arr)

console.log('Primeiro elemento: ', arr[0])
console.log('Segundo elemento: ', arr[1])
console.log('Terceiro elemento: ', arr[2])

console.log(arr.length) // quantos elementos o array vai ter

console.clear()

for (const elemento of arr) {
    console.log(elemento)
}    

for (let indice in arr){
    console.log(indice, arr[indice])
}

