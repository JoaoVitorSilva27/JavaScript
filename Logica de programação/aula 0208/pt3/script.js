console.log('===== DIAS DA SEMANA =====')

//Switch

function verificar() {
    const num1 = Number(document.getElementById('numero').value)
    const resultado = document.getElementById('res')

    switch (num1) {
        case 1:
            resultado.innerText = 'Sabado'
            break;

        case 2:
            resultado.innerText = 'Segunda'
            break;

        case 3:
            resultado.innerText = 'Terça'
            break;

        case 4:
            resultado.innerText = 'Quarta'
            break;

        case 5:
            resultado.innerText = 'Quinta'
            break;

        case 6:
            resultado.innerText = 'Sexta'
            break;

        case 7:
            resultado.innerText = 'Sabado'
            break;
        default:
            resultado.innerText = 'Valor recebido não corresponde a nenhum dia da semana'
            break;
    }
}

