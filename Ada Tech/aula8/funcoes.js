console.clear()

// FUNÇÕES


//Definção
function saudacao() {
    console.log('Ola, seja bem vindo(a)!')
}

//chamando a função
saudacao()

console.clear()

//parametros
function saudacao(nome, curso) {
    console.log(`Ola ${nome}, seja bem vindo(a) ao curso de ${curso}!`)
}

saudacao('João', 'JavaScript') // chamei a função e defini o parametro nome = joao e            curso =  JavaScript

console.clear()

//retorno de função

function soma(num1, num2) {
    console.log('Depois do comando "return" a function sera encerrada, independente se houver outros comandos depois dela')
    return num1 + num2
}

const result = soma(10, 20)

console.log(result) //Isso é bom para quando quetemos utilizar o resultado da funçao mais vezes

console.clear()

//Exemplo onde o return pode ser usado sem encerrar o codigo

function maior(numero) {
    if (numero => 50) {
        return true
    }
    console.log('Tudo ok meu chapa! pode seguir.')

}

maior(50)