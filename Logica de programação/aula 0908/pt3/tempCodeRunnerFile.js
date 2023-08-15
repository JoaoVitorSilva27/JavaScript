console.clear()
const lista =[{
    nome: 'joao',
    idade: 19,
    time: 'lakers'
},
{
    nome:'lebron',
    idade: 38,
    time:'lakers'
}]

const find = lista.find((lista) => 
 lista.idade === 38
)

const filter =lista.filter((lista) =>
lista.time === 'lakers'
)