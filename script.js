
const titulo = document.getElementById('titulo')
const link = document.querySelector('a');


titulo.innerText = 'JavaScript - 1'
link.innerText = 'Proz - Talento Cloud'

const listaNaoOrdenada = document.querySelector('ul')
const listaOrdenada = document.querySelector('ol')

listaNaoOrdenada.innerHTML = `
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
`
listaOrdenada.innerHTML = `
  <li><a href="https:www.facebook.com">Facebook</a></li>
  <li><a href="https://www.amazon.com">Amazon</a></li>
  <li><a href="https://www.google.com">Google</a></li>
`