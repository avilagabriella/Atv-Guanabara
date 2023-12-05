function contar() {
    let sair = document.getElementById('sair')

    sair.innerHTML += `<h2>Contando de 1 até 10, marcando os pares</h2>`

    let conte = 1
    while (conte <= 10) {
        if (conte % 2 == 0) {
            sair.innerHTML += `<mark><strong> ${conte} </strong></mark>&#x1F449;`    
        } else {
            sair.innerHTML += ` ${conte} &#x1F449;`
        }
        conte ++ 
    }
    sair.innerHTML += ` &#x1F3C1;`
}