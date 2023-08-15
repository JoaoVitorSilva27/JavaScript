console.clear()
console.log('===== AULA 7 =====')

let lista = ['banana', 'maça', 'uva', 'pessego' ]

let pessoa = {
    nome: 'João',
    nascimento: '27/02/2004',
    endereço:{
        bairro: 'Seila',
        rua: 'diamante',
        numero:'777'
    }
}

for (const key in pessoa) {
    console.log(key, pessoa[key])
}