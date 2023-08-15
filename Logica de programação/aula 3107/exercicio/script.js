console.log('===== Estoque de veiculos =====')

const lista =[]

function salvar() {
    const model = document.getElementById('modelo')
    const marc = document.getElementById('marca')
    const quantidad = document.getElementById('quantidade')

    lista.push({modelo: model.value , marca: marc.value , quantidade: Number(quantidad.value) })

    model.value = ""
    marc.value = ""
    quantidad.value = ""
    
    console.log(lista)
}

/*
    Para buscas em arrays:
    - find: array.find(item => instrucao booleana);
*/ 

function filtrar() {
    const filtro = document.getElementById('ftxt')
    const veiculof = lista.find(veiculo => veiculo.modelo.startsWith(filtro.value.trim().toLowerCase()) )
    
    const mensagem = veiculof.marca + ' ' + veiculof.modelo + ' em estoque: ' + veiculof.quantidade + ' unidades'

    alert(mensagem)
}