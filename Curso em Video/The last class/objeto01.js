let amigo = {nome: 'João', 
sexo: 'M', 
peso: 95,
engordar(p=0){
    console.log(`Engordou`)
    this.peso += p
} }
console.log(amigo)
console.log(amigo.nome)
amigo.engordar(2)
console.log(amigo.peso)
