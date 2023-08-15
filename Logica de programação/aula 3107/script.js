console.log('===== Aula 3 =====')

const lista =[]

function salvar() {
    console.clear()
    const nome = document.getElementById('nome')
    const telefone = document.getElementById('telefone')
    lista.push([nome.value ,telefone.value]  )
    

    nome.value = ""
    nome.focus()
    telefone.value = ""
    console.log(lista)
}

