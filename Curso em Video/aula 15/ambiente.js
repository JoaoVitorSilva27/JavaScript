//exemplo de array
var num = [5, 15, 7, 2, 23, 9]

//para adicionar um novo elemento com codigo:
num[6] = 34

//para add elementos no ultimo espaço sem ter que especificxar igual acima:
num.push(27)
//nestte caso o numero 27 foi adicionado ao ultimo elemento (que é o 5)


// para mostrar um uncio valor é so colocar (num[indice]) depois do log ex: console.log(num[2])

// para ver quanos elementos tem (nao esta em ordem do indice ou seja, nao começa do 0) :
console.log(`numero de vetores = ${num.length}`)

//para colocar os elementos em ordem crescente:
num.sort(function(a, b){return a-b})
console.log(`${num}`)


