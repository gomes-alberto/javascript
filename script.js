// --------------------1° TÓPICO: Declaração de Variáveis e seus tipos
// var, let, const

// Var: variável de escopo global por padrão. Já não é recomendada para se usar em projectos.
// Let: variável de escopo de bloco (local) por padrão.
// Const: variável de escopo de bloco (local) por padrão, e constante, ou seja, o seu valor não pode ser alterado

// Variaveis de escopo global => Declaradas fora de qualquer bloco ou função
var nome = "Gomes"; 
let idade = 20; 
const pi = 3.14; 

console.log("nome:", nome);
console.log("idade:", idade);
console.log("pi:", pi);

console.log("-----------SEPARADOR------------");

// Variavel de escopo de bloco (local) => Declaradas dentro de um bloco (chaves {})
// Exemplo n° 1:
if (true) {
    let cidade = "Luanda"; 
    console.log(cidade)
}

if (true) {
    const pais = "Angola";
    console.log(pais);
}

// Chamando as variáveis fora do bloco (Irá gerar erro)
// console.log(cidade); // Erro
// console.log(pais); // Erro

if (true) {
    var escola = "IMPAR";
    console.log(escola);
}
console.log(escola); // Diferente do let e const, a variável declarada com var é de escopo global mesmo dentro de um bloco

console.log("-----------SEPARADOR------------");

// Variável de escopo de função => Declaradas dentro de uma função. (Podemos dizer que tambám são variáveis de escopo local)
function mostrarInfrCurso() {
    let autorCurso = "Ricardo";
    const nomeCurso = "JavaScript para Iniciantes";
    var duracaoCurso = "3 meses";

    // Chamando as variáveis dentro da função
    console.log(autorCurso);
    console.log(nomeCurso);
    console.log(duracaoCurso);
}

// Chamando a função para os dados serem exibidos no cnsole
mostrarInfrCurso();

// Chamando as variáveis fora da função (Irá gerar erro)
// console.log(autorCurso); // Erro
// console.log(nomeCurso); // Erro
// console.log(duracaoCurso); // Erro

console.log("-----------SEPARADOR------------");

// Declaração, Reatribuição e redeclaração de valores de variáveis

// Declaração
var disciplina = "Matemática"; // Declaração
let objecto = "Armário"; // Declaração
const vestuario = "Vestido"; // Declaração

// Reatribuição
disciplina = "Química"; // var permite reatribuição
objecto = "Arca"; // let também permite reatribuição
// vestuario = "Saia"; // const não permite reatribuição (de valores), porque o seu valor por definição é constante, ou seja, não pode seu alterado ou mudado.

// Redeclaração
var disciplina = "Física"; // var, permite Redeclaração. Mas isso é muito perigo porque pode causar bugs futuros no seu código. Por isso recomenda-se não o fazer.
// let objecto = "Mesa"; // let, não permite Redeclaração porque é uma variavel de escopo de bloco.
// const vestuario = "Meia"; // const, não permite Redeclaração porque é uma variavel de escopo de bloco.

console.log(disciplina);
console.log(objecto);
console.log(vestuario)

console.log("-----------SEPARADOR------------");

// --------------------2° Tópico: Tipos de Dados (Primitivos)
// Em JavaScript temos os tipos de dados primitivos como:
// string. number, boolean, null, undefined
// Também temos os tipos de dados como: array, aobject, function, NaN, infinity

// Tipo de dado string
const linguagem = "Java";
const mensagem = "Bem vido ao Sistema";
const email = "gomes@gmail.com";
const telefone = "987654321"

console.log(linguagem);
console.log(mensagem);
console.log(email);
console.log(telefone);

console.log("-----------SEPARADOR------------");

// Tipo de dado number
const ano = 2024;
const temperatura = 30.6;
const numeroNegativo = -16.9;
const numeroTelefone = 98765432;

console.log(ano);
console.log(temperatura);
console.log(numeroNegativo);
console.log(numeroTelefone);

console.log("-----------SEPARADOR------------");

// Tipo de dado boolean
const estaChovendo = true;
const temSol = false

console.log(estaChovendo);
console.log(temSol);

console.log("-----------SEPARADOR------------");

// outro exemplo de boolean
const media = 2; // É Aprovado se a media for maior ou igual a 5
const eAprovado = media >= 5

console.log(eAprovado);

console.log("-----------SEPARADOR------------");

// Tipo de dado null
const valorNulo = null;
console.log(valorNulo);

const selecionaGenero = null; // Quando o usuário não seleciona nenhum gênero
console.log(selecionaGenero);

console.log("-----------SEPARADOR------------");

// Tipo de dado undefined
let valorNaoDefinido;
console.log(valorNaoDefinido);


