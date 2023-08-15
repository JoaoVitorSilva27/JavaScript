console.log('===== LISTA DE TAREFAS =====')

/*PROPOSTA


*/

let tarefas = []

function adicionar() {
    let inputTitulo = document.getElementById('titulo')
    let inputDescricao = document.getElementById('descricao')

    let titulo = inputTitulo.value.trim()
    let descricao = inputDescricao.value.trim()

    inputDescricao.value = ''

    inputTitulo.value = ""
    inputTitulo.focus()

    if (!titulo) {
        alert('Não é possivel adicionar tarefas com o titulo vazio!')
        return
    }

    if (!descricao) {
        descricao = '...'
    }

    tarefas.push({titulo: titulo ,descrição: descricao})

    let listatarefa = document.getElementById('listatarefa')
    let item = document.createElement('li')
    item.innerText = 'Nome: ' + titulo +'  | Descrição: ' + descricao
    listatarefa.appendChild(item)
}
