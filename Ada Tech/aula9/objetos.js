console.clear()
//OBJETOS

//Criando objetos

let pessoa = {
   nome: 'João' , 
   idade: 19 
}

console.log(pessoa) //chama o objeto todo

//acessando dados epecificos
console.log(pessoa.nome)
//ou
console.log(pessoa['idade'])

//adicionando elementos no objeto

pessoa.altura = 1.80 //este comando alem de adicionar elemntos tambem serve para alterar elemtnos ja existentes

console.log(pessoa.altura)

//remover elementos

delete pessoa.altura

console.log(pessoa)

//percorrendo objetos

for(let chave in pessoa){
    console.log(chave)
}