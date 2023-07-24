var date = new Date()
      var hora = date.getHours()
      
    if (hora < 5  ) { document.write('Boa madrugada!')
        
    } else if (hora > 5 && hora < 13) { document.write('Bom dia!')
        
    } else if (hora > 13 && hora <19){
        document.write('Boa tarde!')
    } else if(hora > 19){
        document.write('Boa noite!')
    }

      var datemin = new Date()
      var min = datemin.getMinutes()

      document.write()
      document.write(`São ${hora} horas e ${min} minutos`)

      var datedia = new Date()
    var diasem = datedia.getDay()

switch (diasem) {
    case 0:
        document.write('Domingo')
        break;

    case 1: document.write('Segunda-feira')
        break;

    case 2: document.write('Terça-feira')
        break;
    
    case 3: document.write('Quarta-feira')    
        break;
        
    case 4: document.write('Quinta-feira')
        break;
     
    case 5: document.write('Sexa-feira')
        break;
        
    case 6: document.write('Sabado')
        break;    
    default: document.write('[ERRO] Dia invalido')
        break;
} 
let num = document.getElementById('numb')
let lista = document.getElementById('sel')
let res = document.getElementById('res')
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }

}
function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1 ) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado!`
        lista.appendChild(item)
        res.innerHTML = ``
    } else {
        window.alert('Valor invalido ou ja contido na lista!')
    }
    num.value = ``
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione valores primeiro')
    } else {
        
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores){
            soma += valores[pos]
            if (valores[pos] > maior) {
                maior = valores[pos]
            } if(valores[pos] < menor){
                menor = valores[pos]
            } 
            
        }

        res.innerHTML = ``
        res.innerHTML += `<p>Total de valores adicionados = <strong>${total}</strong></p>`
        res.innerHTML += `<p>O maior valor informado foi = <strong>${maior}</strong></p>`
        res.innerHTML += `<p>O menor valor informado foi = <strong>${menor}</strong></p>`
        res.innerHTML += `<p>Soma dos valores = <strong>${soma}</strong></p>`    
        media = soma / total
        res.innerHTML += `<p>A media entre eles é = <strong>${media}</strong></p>`
    }
}