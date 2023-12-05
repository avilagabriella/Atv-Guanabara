function contagem() {
    let sair = document.getElementById('sair')
    let num = Number(document.getElementById('fnum').value)
    sair.innerHTML += `<h2>Contando de 0 até ${num}</h2>`
    let conte = 0
    while (conte <= num) {
        sair.innerHTML += ` ${conte} &#x1F449;`
        conte++
    }
    sair.innerHTML += ` &#x1F3C1;`
}