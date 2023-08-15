const contato = prompt('Digite o nome e Telefone')
const info = contato.split(":")

const pessoa ={
    nome: info[0] ,
    telefone: info[1]
}

console.log(pessoa)