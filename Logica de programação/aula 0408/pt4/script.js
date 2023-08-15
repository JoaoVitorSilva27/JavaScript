
const numeroAleatorio = Math.floor(Math.random() * 10 + 1);

let msg = document.getElementById('msg')
let chancetxt = document.getElementById('chancetxt')
let botao = document.getElementById('botao')

let numero, chance = 0 ,pontos = 300


function adivinhar() {
    numero = Number(document.getElementById('numerotxt').value);
    chance += 1
    
    if(chance <= 3){

        if (numero === numeroAleatorio) {
            msg.innerText = `Parabéns, você acertou! O número é ${numeroAleatorio} e sua pontuação foi ${pontos}.`
            botao.disabled = true
        } 

        else {
            msg.innerText = `O número digitado está incorreto ${numeroAleatorio}. Digite outro número (Chances utilizadas = ${chance}/3):`
            pontos -= 100
        }
    } 
        
    if (chance === 3){
        if (numero === numeroAleatorio) {
            msg.innerText = `Parabéns, você acertou! O número é ${numeroAleatorio} e sua pontuação foi ${pontos}.`
            botao.disabled = true
            } 
        else {
            msg.innerText = ` Suas chances acabaram! O número digitado está incorreto e a resposta era: ${numeroAleatorio}. `
            pontos -= 100
            botao.disabled = true
        } 
    }
}