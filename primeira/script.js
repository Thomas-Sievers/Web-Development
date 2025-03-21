console.log("Hello world!");
console.info("info");
console.warn("warning");
console.error("Error");

console.table([
    {id: 1, tarefa: "Estudar"},
    {id: 2, tarefa: "praticar"}
]);

console.group("Grupos de logs");
console.log("log 1");
console.log("log 2");
console.groupEnd();

console.time("Timer")
    if (1 == 2){
        console.log("Não")
    };
console.timeEnd("Timer");

//comentário de 1 linhas

/*
    Comentário de 
    várias linhas
*/

var antigo = "valor da variável";
console.log(antigo);

let variavelMutavel = "Valor que pode ser alterado";

const variavelImutavel = "valor que nao pode ser alterado diretamente";

let texto = "texto";
console.log(typeof texto);

let numero = 0;
console.log(typeof numero);

let boolean = false;
console.log(typeof boolean);

let nulo = null;
console.log(typeof nulo);

let uniqueId = Symbol("id");
console.log(typeof uniqueId);

let bigNumero = 9999999999999999999999n;
console.log(typeof bigNumero);

let tasks = [
    {id: 1, tarefa: "Estudar JS"},
    {id: 2, tarefa: "Praticar"}
]
console.log(tasks)
console.log(tasks[0])
console.log(tasks[0]['id'])

let hoje = new Date();
console.log(hoje);

let pattern = /^[a-z]+$/i;
console.log(pattern);
