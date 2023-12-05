function contar() {
    let sair = document.getElementById('sair')

    sair.innerHTML += `<h2>Números pares de 1 até 10</h2>`
    let conte = 2
    while (conte <= 10) {
        sair.innerHTML += ` ${conte} &#x1F449;`
        contr += 2 
    }
    sair.innerHTML += ` &#x1F3C1;`
}