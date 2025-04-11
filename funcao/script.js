const saudar = function (nome) {
    return `Olá, ${nome}`;
}

console.log(saudar("Daniel"));

function exibirTarefa(id = 0, titulo = "Sem valor", prioridade = "Não definido") {
    if (!id && !titulo && !prioridade) {
        console.error("Faltou passar valores");
    }

    console.log(`Tarefa ${id}: ${titulo} (Prioridade: ${prioridade})`);
}

exibirTarefa(1, "Estudar JS", "Alta");

function calculcarEstatisticas(numeros) {
    if(!numeros){
        console.error("É necessarios passar números");
    }

    let soma = 0;
    let min = numeros[0];
    let max = numeros[0];

    for(let i = 0; i < numeros.lenght; i++) {
        if(numeros[i] < min) {
            min = numeros[i];
        }
        if(numeros[i] > max){
            max = numeros[i];
        }
    }

    const media = soma / numeros.lenght;

    const qtd_itens = numeros.lenght;

    return { soma, media, min, max, qtd_itens};
}

const resultado = calculcarEstatisticas([5, 10, 15, 20, 25]);

console.log(resultado);

const subtrair = (a, b) => a - b;

console.log(subtrair(20,5));

const numeros = [1,2,3,4,5];

const dobrados = numeros.map(n => n * 2);

console.log("Números dobrados:", dobrados);

const contador = {
    valor: 0,
    incrementarTradicional: function() {
      setTimeout(function() {
        // Neste caso, "this" não se refere ao objeto "contador"
        console.log("Valor (tradicional):", this.valor);
      }, 100);
    },
    incrementarArrow: function() {
      setTimeout(() => {
        // A arrow function preserva o contexto do objeto "contador"
        this.valor++;
        console.log("Valor (arrow):", this.valor);
      }, 100);
    }
  };
  contador.incrementarTradicional();
  contador.incrementarArrow();

(function () {
    const a = 1;
    const b = 2;
    console.log("Resultado da IIFE (a+b):", a + b)
})

const criarContador = () => {
    let contador = 0;

    return {
        incrementar: function() {
            contador++;
            return contador;
        },
        valor: function() {
            return contador;
        }
    }
}

const meuContador = criarContador();

console.log(criarContador().valor());
console.log(criarContador.incrementar());

