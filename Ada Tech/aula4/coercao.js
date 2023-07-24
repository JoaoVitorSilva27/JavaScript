console.clear()

// Coerção (conversão) de tipos

// Conversão Explicita 

const numero1 = 10
console.log(numero1, typeof numero1)


const numerotxt = String(numero1)
console.log(numerotxt, typeof numerotxt)

const numero2 = '1234'
console.log(Number(numero2))

console.log(parseFloat('12.3'))  // converte em numeros com "virgula" (que nesse caso TEM QUE SER ponto) obs: esse comando poderia ser substituido pelo number que tbm funcionaria (recomenda-se sempre usar o number) 

console.log(parseInt('12.3')) //converte para inteiro

console.log(Boolean(1)) //converte para true or false (sendo 0 false e todo os outros numeros true)

console.clear()

// Coerção implicita

console.log(10 + '1') //converte tudo pra texto e junta os elementos (concatenar)

console.log(10 - '1') // quando é menos o JS entende que é numero e converte tudo em numero
console.log(10 * '2') // Tambem ocorre a conversao
console.log(10 - 'abc') // Erro NotANumber 
