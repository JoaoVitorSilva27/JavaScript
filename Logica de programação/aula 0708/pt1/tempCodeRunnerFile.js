for (let numero = 2; numero <= 100; numero++) {
    let ehprimo = true
    
    for (let primo = 0; primo <= numero / 2; primo++) {
        if (numero % primo === 0) {
            ehprimo = false
            break
        }
        
    }

    if (ehprimo) {
        console.log(numero)
    }
}