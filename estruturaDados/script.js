//----------------------------------------------
// let titulo = "Aprender JS";

// let descricao = "Estudar manipulação de strings";

// console.log(titulo, typeof(titulo));
// console.log(descricao, typeof(descricao));

// console.log("Tamanho da variável título:", titulo.length);
// console.log("Tamanho da variável descrição:", descricao.length);

// console.log("Primeiro caractere do título:", titulo[0]);
// console.log("Primeiro caractere da descrição:", descricao[0]);

// console.log("Primeiro caractere do Título:", titulo[titulo.length - 1]);

// const palavra = "palavra";

// console.log("Caratere na posição 3", palavra.charAt(3));

//----------------------------------------------

// let categoria = "Estudo";
// let infoCompleta = "Categoria: " + categoria + " - " + titulo;

// console.log(infoCompleta);

// let infoCompleta2 = `Categoria: ${categoria} - ${titulo}`;

// console.log(infoCompleta2);

//----------------------------------------------

// let texto1 = "Posição de JavaScript";

// console.log(texto1.indexOf("JavaScript"));
// console.log(texto1.includes("JavaScript"));
// console.log(texto1.startsWith("Posição"));
// console.log(texto1.endsWith("Posição"));

//----------------------------------------------

// const truncarDescricao = (texto, maxLenght = 30) => {
//     if(texto.lenght <= maxLenght) {
//         return texto;
//     }
//     return texto.substring(0, maxLenght) + "...";
// }

// let descricaoLonga = "Este é um exemplo de uma descrição muito longa que precisará ser truncada pra exibição. ";

// console.log("Descrição truncada: ", truncarDescricao(descricaoLonga));

// console.log("Descrição truncada (6 caracteres): ", truncarDescricao("Palavra", 5));

//----------------------------------------------

// let texto = "javascript,programacao,web,frontend"

// console.log("Texto Original: ", texto);
// console.log("Texto Slice: ", texto.slice(0, 10));
// console.log("Texti substring:", texto.substring(0, 10));

// let arrayTags = texto.split(",");

// console.log(arrayTags);

// console.table(arrayTags);

// console.log(arrayTags.join(","));

//----------------------------------------------

// const destacarTermo = (texto, termo) => {
//     if(!termo) {
//         return texto;
//     }

//     const regex = new RegExp(termo, "gi");

//     return texto.replace(regex, `**$&**`)
// }

// let busca = destacarTermo("JavaScript é uma linguagem incrivel. Amo JavaScript!", "JavaScript");

// console.log("Resultado com destaques:", busca);

//----------------------------------------------

// console.log("Math.PI", Math.PI);
// console.log("Math.E", Math.E);

// const raio = 5;

// const areaCirculo = Math.PI * Math.pow(raio, 2);

// console.log(`Àrea de um circulo com o raio ${raio}: ${areaCirculo}`);

// const numero = 9.7;

// console.log(Math.round(numero));
// console.log(Math.floor(numero));
// console.log(Math.ceil(numero));
// console.log(Math.trunc(numero));

// const numeroAleatorio = (min, max) => {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// console.log(numeroAleatorio(1, 100));

// console.log(Math.random());

//----------------------------------------------

//const hoje = new Date();

// console.log(hoje);

// console.log(new Date("2025-06-15T10:30:00"));

// const dataComponentes = new Date(2025, 5, 15, 10, 30, 0);

// console.log(dataComponentes);

// const hoje = new Date();

// const formatarData = (data) => {
//     const dia = data.getDate();
//     const mes = data.getMonth() + 1;
//     const ano = data.getFullYear();

//     return `${dia}/${mes}/${ano}`
// }

// console.log(formatarData(hoje));

// const adicionarDias = (data, dias) => {
//     const novaData = newDate(data);

//     novaData.setDate(data.getDate() + dias)

//     return novaData;
// }

// console.log(adicionarDias(hoje, 10))

// const dataFinal = new Date("05-11-2025");

// const diferencaMs = dataFinal - hoje;

// console.log(diferencaMs);

// const diferencaDias = Math.ceil(diferencaMs / (1000 * 60 * 60 * 24));

// console.log(diferencaDias)

//----------------------------------------------