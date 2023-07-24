var agora = new Date() 
var hora = agora.getHours()

var teste = new Date()
var min = teste.getMinutes()
console.log(`EXATAMENTE ${hora} HORAS E ${min} MINUTOS AI BIXO!`)

if ( hora > 5 && hora < 13 ) {
    console.log('Bom dia!')
    
} else if(hora <= 18 && hora >= 13) {
    console.log('Boa tarde!')
    
}else if(hora < 5 ) {
    console.log('Boa madrugada!')
}
else {console.log('Boa noite!')}


var agr = new Date()
var diasem = agr.getDay()

switch (diasem) {
    case 0:
        console.log('Domingo')
        break;

    case 1: console.log('Segunda-feira')
        break;

    case 2: console.log('Terça-feira')
        break;
    
    case 3: console.log('Quarta-feira')    
        break;
        
    case 4: console.log('Quinta-feira')
        break;
     
    case 5: console.log('Sexa-feira')
        break;
        
    case 6: console.log('Sabado')
        break;    
    default: console.log('[ERRO] Dia invalido')
        break;
}