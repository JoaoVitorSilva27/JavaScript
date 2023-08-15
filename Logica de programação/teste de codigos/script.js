const resultado = document.getElementById('res')
const resultado2 = document.getElementById('res2')
const resultado3 = document.getElementById('res3')

let count = 0

while(count <= 10){
    resultado.innerText = count
    count = count + 1
    debugger
}

let farofa = [10,20,30,40,50]

for(index in farofa){
    resultado2.innerText = farofa[index] + ', ' + index
    debugger
}

for(value of farofa){
    resultado3.innerText = value
    debugger
}