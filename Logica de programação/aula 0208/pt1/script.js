console.log('===== AULA 5 =====')

function verificar() {
    const num = document.getElementById("numerotxt")
    const num1 = Number(num.value)
    const resultado = document.getElementById("resultado")

    if (num1 % 2 === 0) {
        console.log('Numero par!')
        resultado.innerText = `O numero ${num1} é PAR!`
    }
    else {
        console.log('Numero impar!')
        resultado.innerText = `O numero ${num1} é IMPAR!`
    }
    console.log(num1)
}


