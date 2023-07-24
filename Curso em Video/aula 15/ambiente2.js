var num = [5, 15, 7, 2, 23, 9]

num.sort(function(a, b){return a-b})

//modos de mostrar os vetores separadamente e auto:
for (var pos = 0; pos < num.length;pos++){
    console.log(`a posição ${pos} tem o valor = ${num[pos]}`)
}

//ou

for (var pos in num ) {
   console.log(num[pos])
}