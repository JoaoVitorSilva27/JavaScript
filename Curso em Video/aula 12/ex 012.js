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