console.log('===== AULA 7 pt2 =====')

function soma(x, y){
    return x + y
}

function sub(x, y){
    return x - y
}

function mult(x, y){
    return x * y
}

function div(x, y){
    return x / y
}

function obtervalores() {
    
    const valor1 = Number(document.getElementById('num1').value)
    const valor2 = Number(document.getElementById('num2').value)


    if (isNaN(valor1) || isNaN(valor2)) {
        alert('Valores invalidos')
        return{
            num1: 0,
            num2: 0
        }
    }

    const num1 = Number(valor1)
    const num2 = Number(valor2)

    return{
        num1,
        num2
    }
}

function somar() {
    const {num1 , num2} = obtervalores()

    const result = soma(num1 , num2)

    console.log(result)
} 

function subtracao() {
    const {num1 , num2} = obtervalores()

    const result = sub(num1 , num2)

    console.log(result)
}

function multiplicacao() {
    const {num1 , num2} = obtervalores()

    const result = mult(num1 , num2)

    console.log(result)
}

function divisao() {
    const {num1 , num2} = obtervalores()

    const result = div(num1 , num2)

    console.log(result)
}