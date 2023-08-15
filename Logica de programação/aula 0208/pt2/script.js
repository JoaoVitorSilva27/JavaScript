console.log('===== ALUNOS APROVADOS =====')

function calcular() {
    const nome = document.getElementById('nome').value
    const nota1 = Number(document.getElementById('nota1').value)
    const nota2 = Number(document.getElementById('nota2').value)
    const nota3 = Number(document.getElementById('nota3').value)

    const resultado = document.getElementById('resultado')

    const media = (nota1 + nota2 + nota3) /3

    if (media >= 7) {
        resultado.innerText = `Parabens ${nome} ! você foi aprovado com uma nota media = ${media}`
    } else if (media >= 5 && media < 7){
        resultado.innerText = `Fique calmo ${nome}, ainda ha esperança ! Você esta de recuperação com uma nota media = ${media}`
    }
    else{
        resultado.innerText = `Que pena ${nome}! Você foi reprovado com uma nota media = ${media}`
    }
}