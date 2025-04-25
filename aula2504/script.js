// //Array literal (forma mais comum)

// const tarefas = [
//     "Estudar JavaScript",
//     "Criar projeto TaskMaster",
//     "Preparar apresentação",
//     "Revisar Código"
// ];

// console.log("Array de tarefas", tarefas);

// //Usando o construtor array
// const categorias = new Array("Trabalho", "Estudo", "Pessoal", "Projetos")
// console.log("Array de categorias:", categorias);

// //Array.of (ES6)
// const prioridades = Array.of("Baixa", "Média", "Alta");
// console.log("Array de prioridades:", prioridades);

// //Array.from (ES6) - cria array a partir de uma string
// const letras = Array.from("TaskMaster");
// console.log("Array de letras:", letras);

// //acesso por índice
// console.log("Primeira tarefa:", tarefas[0]);
// console.log("Última tarefa", tarefas[tarefas.lenght - 1]);

// //Modificando um elemento
// tarefas[2] = "Preparar apresentação sobre Arrays"; //Adiciona no final
// console.log("Após modificação:", tarefas);

// //Métodos para adicionar e remover elementos
// tarefas.push("Testar aplicação");
// console.log("Após push:", tarefas);

// const removido = tarefas.pop(); //Remove o último
// console.log("Removido com pop:", tarefas);
// console.log("Após pop:", tarefas);

// tarefas.unshift("Planejar Sprint"); //Adiciona ao inicio
// console.log("Após unshift:", tarefas);

// const removidoInicio = tarefas.shift(); //Remove o primeiro
// console.log("Removido com shift:", removidoInicio);
// console.log("Após o shift:", tarefas);

// tarefas.splice(1, 3);

// const executarForEach = (elemento, indice) => {
//     console.log(`${indice + 1}. ${elemento}`);
// }

// tarefas.forEach(executarForEach);

// const arrayNovo = tarefas.map((elemento, indice) => {
//     return elemento + " - Concluido";
// })

// console.log(arrayNovo);

// const tarefasComa = tarefas.filter(elemento => elemento.toLowerCase().includes("p"));

// console.log(tarefasComa);

// const tarefaEncontrada = tarefas.find(elemento => elemento.includes("JS"));

// console.log(tarefaEncontrada);

// const indiceTarefaEncontrada = tarefas.findIndex(elemento => elemento.includes("JS"));

// console.log(indiceTarefaEncontrada);

// tarefas.splice(indiceTarefaEncontrada, 1);

// console.log(tarefas);

// const valorFinal = tarefas.reduce((total, t) => (total + t, 0));
// console.log(valorFinal);

const tarefa = {
    id: 1,
    titulo: "Aprender sobre objetos",
    descricao: "Estudar proriedades e métodos",
    concluida: false,
    prioridade: "alta",
    dataCriacao: new Date()
}

console.log(tarefa);

console.log(tarefa?.titulo);
console.log(tarefa["titulo"]);

const tarefasEspeciais = {
    "data-criacao": new Date(),
    "nome da tarefa": "nome da tarefa separado",
}


console.log(tarefasEspeciais["nome da tarefa"]);
console.log(tarefasEspeciais["data-criacao"]);

console.log(Object.keys(tarefa));
console.log(Object.values(tarefa));

const prioridades = ["baixo", "média", "alta"];

const [baixa, media, alta] = prioridades;

console.log(baixa, media, alta);

const categorias = ["trabalho", "Estudo", "Pessoal", "Saúde"];

const [primeiraCategoria, ...outrasCategorias] = categorias;

console.log(primeiraCategorias, outrasCategorias);