function contar() {
    let sair = document.getElementById('sair')

    sair.innerHTML += `<h2>Contagem Regressiva de 10 a 1</h2>`
    let conte = 10
    while (conte >= 1) {
        sair.innerHTML += ` ${conte} &#x1F449;`
        conte -- 
    }
    sair.innerHTML += ` &#x1F3C1;`
}