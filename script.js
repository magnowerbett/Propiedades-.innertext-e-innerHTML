
let titulo = document.getElementById('titulo')
let link = document.querySelector('a');


titulo.innerText = 'JavaScript - 1'
link.innerText = 'Proz - Talento Cloud'

// Capturando os elementos ul e ol
let listaNaoOrdenada = document.querySelector('ul')
let listaOrdenada = document.querySelector('ol')

// Adicionando três itens simples na lista não ordenada
listaNaoOrdenada.innerHTML = `
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
`
// Adicionando três itens com links na lista ordenada
listaOrdenada.innerHTML = `
  <li><a href="https:www.facebook.com">Facebook</a></li>
  <li><a href="https://www.amazon.com">Amazon</a></li>
  <li><a href="https://www.google.com">Google</a></li>
`