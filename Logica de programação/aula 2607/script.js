
console.log('====== Fundamentos =====')

console.log(nome)

var nome = prompt("Digite seu nome")

let idade = prompt("Digite a sua idade")
const nota1 = parseFloat(prompt("Digita a nota 1"))
const nota2 = parseFloat(prompt("Digite a nota 2"))

const peso1 = parseFloat(prompt("Digite o peso da primeira nota"))
const peso2 = parseFloat(prompt("Digite o peso da segunda nota"))

const soma = nota1 + nota2
const pesotot = peso1 + peso2

const media = Math.round(soma / 2)
const mediap = ((nota1 * peso1) + (nota2 * peso2)) / pesotot 
const mediapon = Math.round(mediap * 10) / 10

console.log(`A soma de suas notas é ${soma}, a media é igual a ${media} e media ponderada ${mediapon}  `)