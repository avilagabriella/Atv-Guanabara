function contar() {
  let sair = document.getElementById('sair')

  sair.innerHTML += `<h2>Contando de 1 até 10</h2>`

  let conte = 1
  while (conte <= 10) {
      sair.innerHTML += ` ${conte} &#x1F449;`
      conte ++ 
  }
  sair.innerHTML += ` &#x1F3C1;`
}