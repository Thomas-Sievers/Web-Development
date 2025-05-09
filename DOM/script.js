// const titulo = document.querySelector('h1');

// titulo.textContent = 'Novo título';

// const div = document.querySelector('#container');

// div.innerHTML = '<p>Novo parágrafo <b>HTML</b></p>';

// const img = document.querySelector("img");

// img.src = "images/meuAvatar.jpg"; 
// img.setAttribute('width', '200px'); 
// img.alt = 'Avatar profile';

// const caixa = document.querySelector('.box');

// const botao = document.getElementById('meuBotao');

// botao.addEventListener('click', () => {
//     caixa.classList.toggle('oculta');
// });

// const novoItem = document.createElement('li');
// novoItem.textContent = 'Novo Item';
// const novoItem2 = document.createElement('li');
// novoItem2.textContent = 'Novo Item2';

// document.querySelector('ul').appendChild(novoItem);
// document.querySelector('ul').appendChild(novoItem2);

// localStorage.setItem('nome', "Thomas");
// localStorage.setItem('nome2', "Felipe");

// const nome = localStorage.getItem("nome");

// console.log(nome);

//localStorage.removeItem('nome2');

//localStorage.clear();

// const usuario = {nome: 'Thomas', idade: 18};

// localStorage.setItem('usuario', JSON.stringify(usuario));

// const usuarioRecuperado = JSON.parse(localStorage.getItem(usuario));

let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

function renderizarLista() {
    const lista = document.getElementById('lista-tarefas');
    lista.innerHTML = '';

    tarefas.forEach((t, i) => {
        const li = document.createElement('li');
        li.textContent = t;
        lista.appendChild(li);
    })
}

renderizarLista();

document.getElementById("form-tarefa").onsubmit = (e) => {
    e.preventDefault();
    const input = document.getElementById("input-tarefa");
    tarefas.push(input.value);
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
    input.value = "";
    renderizarLista();
}

document.getElementById("btn-limpar").onclick = () => {
    tarefas = [];
    localStorage.removeItem('tarefas');
    renderizarLista();
}








