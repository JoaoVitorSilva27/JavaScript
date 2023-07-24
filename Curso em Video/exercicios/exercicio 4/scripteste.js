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

    function gerar() {
        var num1 = document.getElementById('txtn')
        var tab = document.getElementById('seltab')

        if (num1.value.length == 0) {
            window.alert('[ERRO]')
            
        } else {
            var n = Number(num1.value)
            var c = 1
            tab.innerHTML = ``
            while (c <= 10) {
                var item = document.createElement('option')
                item.text = `${n} x ${c} = ${n*c}`
                item.value = `${c}`
                tab.appendChild(item)
                c++
            }
           }

        
        
    }