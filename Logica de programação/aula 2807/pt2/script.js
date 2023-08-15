console.clear()
console.log('===== AULA 2 =====')

const lista = [[1,2,3][4,5,6]]
const pessoa ={
    nome: 'João' ,
    idade: 19 ,
    altura: 1.80 ,
    //Objeto dentro de outro objeto
    endereco:{
        rua: '81' ,
        casa: '1'
    }
}

console.log(pessoa)

//para add atributos

pessoa.time = 'Lakers'

console.log(pessoa)

//para alterar um atributo

pessoa.altura = 1.79

console.log(pessoa)