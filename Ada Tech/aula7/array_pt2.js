// Array PT.2

const arr1 = [23, 55 ,83 ,61, 27]

//Fatiamento

console.log(arr1.slice(0, 2)) //vai mostrar os dois primeiros elementos (começa no 0 e vai ate < 2, ou seja ele vai pegar o elemtno 0 e 1 {porque ele tem que ser menor que 2})

console.log(arr1.slice(2)) // vai mostar do 2* elemento ate o final (começa no 2 e vai ate o fim)

console.clear()
//Adicionando elementos

let arr2 = []

console.log(arr2)

arr2.push(10, 20)

console.log(arr2)

arr2.unshift(0)  // unshift adiciona no inicio do array
console.log(arr2)

console.clear()

// Remoção de elementos

console.log(arr2)

const popp = arr2.pop()  //remove o ultimo elemento (OBS: a variavel so serve para mostar o elemento removido mais a frente, o codigo roda suave sem ela. )

console.log(arr2, popp)


 const shi = arr2.shift() // shift vai remover o primeiro elemento (OBS: variavel nao necessaria igual pop)
 
 console.log(arr2, shi)

 console.clear()

 //Concatenação

 console.log(arr1, arr2)

 console.log(arr1.concat(arr2)) //junta as duas arrays
 console.log(arr2.concat(arr1)) // juntou na ordem contraria

 console.clear()

 //Buscar elementos

 console.log(arr1)

 let indiceElemento = arr1.indexOf(83) //indexOf mostra o indice do elemento selecionado (que nesse caso foi o 83). Caso o elemento nao exista ele retornara -1. Caso haja mais de um elemento igual ele retornara o indice do que aparecer primeiro na ordem.
 console.log(indiceElemento) 

 let arr3 = [1, 2, 3, 4, 3, 5]
 console.log(arr3)

 let ultimoIndice = arr3.lastIndexOf(3) // Como citado, caso haja mais de um elemnto igual ele ria msotrar o indice que aparecer primeiro, nestecaso ele mostrara o ultimo que aparecer igual
 console.log(ultimoIndice)

 console.clear()

 //Descobrindo elementos

 console.log(arr1)

 console.log(arr1.includes(0)) // "Inclui" retornara um resultado boleano para dizer se tem o elemento selecionado (que nesse caso foi o 0) ou seja, ele mostrara false
 console.log(arr1.includes(23)) // Aqui ele retornara true ja que o valor selecionado é presente no array

 console.clear()

 //Invertendo arrays

 console.log(arr1)

 let arr1Inver = arr1.reverse() //ele inverte a ordem dos elementos

 console.log(arr1Inver)
