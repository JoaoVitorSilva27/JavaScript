function carregar () {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    if (min < 10) {
        min = "0"+min
    }

    if (hora >= 0 && hora < 13) { //bom dia
        img.src = 'fotomanha.png'
        document.body.style.background = '#ffa975'
        msg.innerText = `Bom dia! Agora são ${hora}:${min}`
        
    } else if (hora >= 13 && hora <19) { //boa tarde
        img.src = 'fototarde.png'
        document.body.style.background = '#ff8737'
        msg.innerText = `Boa tarde! Agora são ${hora}:${min}`
        
    } else {//boa noite
        img.src = 'fotonoite.png'
        document.body.style.background = '#1b2050'
        msg.innerText = `Boa noite! Agora são ${hora}:${min}`

    }
}
