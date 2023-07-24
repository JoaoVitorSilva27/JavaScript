function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    

    if (fano.value.length == 0 || Number(fano.value) > ano ) {
        window.alert('ERRO')
    } else{
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(fano.value)
       var genero = ""
       var img = document.createElement('img')
       img.setAttribute('id', 'foto')
       if (fsex[0].checked) {
        genero = 'homen'
        if (idade >= 0 && idade <= 13) {//criança
            img.setAttribute('src', 'foto-bebe-m.png')
            
        } else if( idade < 20){//adolescente
            img.setAttribute('src', 'foto-ado-m.jpg')
        
        } else if (idade < 29){//jovem
            img.setAttribute('src', 'foto-jovem-m.png')

        } else if( idade < 50){//adulto
            img.setAttribute('src', 'foto-adulto-m.png')

        } else {//idoso
            img.setAttribute('src', 'foto-idoso-m.png')

        }

       } else if (fsex[1].checked){
        genero = 'mulher'
        if (idade >= 0 && idade <= 13) {//criança
            img.setAttribute('src', 'foto-bebe-f.png')
            
        } else if( idade < 20){//adolescente
            img.setAttribute('src', 'foto-ado-f.jpg')
        
        }else if(idade < 29){
            img.setAttribute('src', 'foto-jovem-f.png')

        } else if( idade < 50){//adulto
            img.setAttribute('src', 'foto-adulto-f.png')

        } else {//idoso
            img.setAttribute('src', 'foto-idoso-f.png')
        }

       }
       res.style.textAlign = 'center'
       res.innerHTML = `Você tem ${idade} anos e é ${genero}!`
       res.appendChild(img)
       
    } 
    

}