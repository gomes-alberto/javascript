// --------------------------Como declarar variaveis
// var, let, cont
var nome = "Gomes";
let idade = "20 Anos";
const genero = "Masculino";

console.log(nome);
console.log(idade);
console.log(genero);

console.log("------------------------")

// --------------------------Escopo das variaveis
// Escopo Global
var carro = "Toyota";
let = objecto = "Arca";
const marcaPC = "Dell";

console.log(carro);
console.log(objecto);
console.log(marcaPC)

console.log("------------------------")

// Escopo de Bloco (Local)
if (true) {
    var marcaRoupa = "Vestido";
    let marcaCalcado = "Ténis";
    const  marcaCamisa = "Mangas Cumpridas";

    // Chamndo as variaveis dentro do bloco da função
    console.log(marcaRoupa); 
    console.log(marcaCalcado);
    console.log(marcaCamisa);
}

// Chamando as variaveis fora do bloco da função
console.log(marcaRoupa);
// console,log(marcaCalcado);
// console.log(marcaCamisa);

console.log("------------------------")

// Escopo de Função (Local)
function mostrarInfor() {
    var mostrarGelado = "Múcua";
    let mostrarComida = "Arrox com Feijão";
    const mostrarSumo = "De Manga";

    // Chamando as variaveis dentro da função
    console.log(mostrarGelado);
    console.log(mostrarComida);
    console.log(mostrarSumo);
}

// Chamando a função
mostrarInfor();

// Chamando as variaveis fora da função
// console.log(mostrarGelado);
// console.log(mostrarComida);
// console.log(mostrarSumo);

console.log("------------------------")

// --------------------------Declaração, Reatribuição, Redeclaração de variaveis
// Declaração
var tipoCopo = "Vidro";
let tipoLampada = "Florescente";
const tipoTelefone = "Digital";

// Reatribuição
tipoCopo = "Plástico";
tipoLampada = "Normal, não Florescente";
// tipoTelefone = "Analógico";

// Redeclaração
var tipoCopo = "Vidro e Plástico";
// let tipoLampada = "Florescente com iluminação boa";
// const tipoTelefone = "Digital e Analógico";

console.log(tipoCopo);
console.log(tipoLampada);
console.log(tipoTelefone);

console.log("------------------------")

// -------------------------- Tipos de Dados Primitivos em Java Script
// string, number, boolean, null, undefined

// Como declarar um Tipo de dado string
const tipoLivro = "Infantil";
const tipoCorpo = "1 Metro"
const aniversario = "20"
const simbolo = "||-==+-0)(*&¨%$#@!!||" // Neste exemplo, podemos ver que o tipo string armazena também outros caracteres, e não apenas letras ou números.
// const erro = ERRO; // Isso dara uma erro porque o tipo string, tem que estar sempre dentro de virgulas altas. Seja elas simples ou duplas.

console.log(tipoLivro);
console.log(tipoCorpo);
console.log(aniversario);
console.log(simbolo);
// console.log(erro);

console.log("------------------------")

// Tipo number
const primeiroNumero = 1234567890;
const segundoNumero = -1234567890;
const terceiroNumero = 1234.567890; // O ponto aqui é virgula
const quartoNumero = -12345.67890; 

console.log(primeiroNumero);
console.log(segundoNumero);
console.log(terceiroNumero);
console.log(quartoNumero);

console.log("------------------------")

// Tipo Boolean (Booleano)
// Exemolo 01
const eArmario = true;
const ePC = false;

console.log(eArmario);
console.log(ePC);

// Exemolo 02
const notaAluno = 5;
const aprovado = notaAluno >= 5;

console.log(aprovado);

// Exemolo 03: Neste exemplo eu mostro que o tipo de dado boolean, tembém se aplica em variaveis do tipo string (Carateres) e não so number (números). Onde so será true (verdade) se a variavel legume for tomate. E se não for Tomate ela dá false (Falso).
const legume = "pipino";
const verdada = legume == "tomate";

console.log(verdada);

console.log("------------------------")

// Tipo Null (Nulos)
const nulo = null

console.log(nulo);
console.log(typeof nulo)

// Tipo Undefined (Indefinido)
// OBS: A variavel const não aceita valores undefined (indefindos) 
// Exemplo 01 
let valorIndefinido;
console.log(valorIndefinido);
console.log(typeof valorIndefinido);

// Exemplo 02
const exemploB = undefined;
console.log(exemploB);
console.log(typeof exemploB);







