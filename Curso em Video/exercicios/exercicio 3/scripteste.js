var date = new Date()
      var hora = date.getHours()
      
    if (hora < 5  ) { document.write('Boa madrugada! ')
        
    } else if (hora > 5 && hora < 13) { document.write('Bom dia! ')
        
    } else if (hora > 13 && hora <19){
        document.write('Boa tarde! ')
    } else if(hora > 19){
        document.write('Boa noite! ')
    }

      var datemin = new Date()
      var min = datemin.getMinutes()

      document.write()
      document.write(` São ${hora} horas e ${min} minutos`)

      var datedia = new Date()
    var diasem = datedia.getDay()

switch (diasem) {
    case 0:
        document.write(' Domingo')
        break;

    case 1: document.write(' Segunda-feira')
        break;

    case 2: document.write(' Terça-feira')
        break;
    
    case 3: document.write(' Quarta-feira')    
        break;
        
    case 4: document.write(' Quinta-feira')
        break;
     
    case 5: document.write(' Sexa-feira')
        break;
        
    case 6: document.write(' Sabado')
        break;    
    default: document.write('[ERRO] Dia invalido')
        break;
} 




function contar() {

    var ini = document.getElementById('txti')
    var fi = document.getElementById('txtf')
    var pass = document.getElementById('txtp')
    var res = document.getElementById('rest')

    if (ini.value.length == 0 || fi.value.length == 0 || pass.value.length == 0) {
        window.alert('[ERRO]')
    } else {
        res.innerHTML = 'Contagem:'
        var num1 = Number(ini.value)
        var num2 = Number(fi.value)
        var pas = Number(pass.value)
        if (pas <= 0) {
            window.alert('[ERRO] passo nao pode ser 0!')
            pas = 1
        }
        if(num1 < num2){
        for(let c = num1; c <= num2; c += pas){
            res.innerHTML += ` ${c} 👉`
        }
         
        } else{
            for(var c = num1; c >= num2; c -= pas){
                res.innerHTML += ` ${c} 👉`
            }
         }
        res.innerHTML += `\u{1f3c1}`
        }  
}
