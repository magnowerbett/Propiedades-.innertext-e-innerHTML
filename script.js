const tituloElement = document.getElementById('titulo');
const ulElement = document.querySelector('ul');
const aElement = document.querySelector('a');
const olElement = document.getElementById('lista-ordenada');

tituloElement.innerText = 'Título do Projeto';
aElement.innerText = 'Link para o ProzEducação';

const itensNaoOrdenados = ['Item 1', 'Item 2', 'Item 3'];

itensNaoOrdenados.forEach((item) => {
    const li = document.createElement('li');
    li.innerText = item;
    ulElement.appendChild(li);
});

const itensOrdenados = [
    { text: 'Google', link: 'https://www.google.com' },
    { text: 'Facebook', link: 'https://www.facebook.com' },
    { text: 'GitHub', link: 'https://www.github.com' }
];

itensOrdenados.forEach((item) => {
    const li = document.createElement('li');
    const link = document.createElement('a');
    link.href = item.link;
    link.innerText = item.text;
    li.appendChild(link);
    olElement.appendChild(li);
});
