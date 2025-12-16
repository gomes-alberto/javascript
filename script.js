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

console.log("-----------SEPARADOR------------");

// -------------------- 3° Tópico: Operadores e seus tipos.
// Os tipos de operadors em javaScript são:
// Operdores Aritmeticos, de atribuição, relacionais, locógicos, e ternário

// Operadores Aritméticos
const soma = 10 + 5; // Adição
const subtracao = 10 - 5; // Subtração
const multiplicacao = 10 * 5; // Multiplicação
const divisao = 10 / 3; // Divisão real (como ela é um número decimal, o resultado também será decimal, mas se fosse uma divisão exata, o resultado seria um número inteiro)
const restoDivisao = 10 % 8; // Resto da Divisão inteira
const potencia = 10 ** 2; // Potência (Neste caso é 10 elevado a 2)
let incremento = 5; // Incremento (Adiciona 1 ao valor da variável)
let decremento = 5; // Decremento (Subtrai 1 ao valor da variável)

console.log(soma);
console.log(subtracao);
console.log(multiplicacao);
console.log(divisao);
console.log(restoDivisao);
console.log(potencia);
console.log(++incremento);
console.log(--decremento);

console.log("-----------SEPARADOR------------");

// Outro exemplo de Operadores Aritméticos

const x = 10;
const y = 5;

console.log(x + y); // Adição
console.log(x - y); // Subtração
console.log(x * y); // Multiplicação
console.log(x / y); // Divisão
console.log(x % y); // Resto da Divisão inteira
console.log(x ** y); // Potência (ou exponenciação)
// console.log(++x); // Irá gerar erro porque o x é uma constante. Mas se uma variável let ou var (embora não sendo recomendado), iria funcionar.
// console.log(--y); // Irá gerar erro porque o y é uma constante. Mas se uma variável let ou var (embora não sendo recomendado), iria funcionar.

// OBS: O incremento e o decremento só funcionam com variáveis do tipo let ou var, pois o valor delas pode ser alterado. Já as constantes (const) não podem ter seus valores alterados.

console.log("-----------SEPARADOR------------"); 

// Operadores de Atribuição
// O operador de atribuição é o IGUAL (=), as vezes também é conhecido como operador de atribuição simples ou operador de recebimento (RECEBE).

let igual = 10;
igual ++;
igual = igual + 20;

console.log(igual)

// Outro exemplo de Operadores de Atribuição
let atribuicao = 10;
atribuicao = atribuicao + 5;
// atribuicao +=5; // Forma abreviada de fazer a atribuição de acima (atribuicao = atribuicao + 5). Usando o operador composto (+=), ou seja, o operador de atribuição junto com o operador aritmético de adição.

console.log(atribuicao);

// OBS: O operador de atribuição (=), vc pode usar junto com os operadores aritméticos para fazer atribuições compostas, como no exemplo acima (+=).

console.log("-----------SEPARADOR------------");
// Operadores Relacionais, ou operadores de comparação
// Usado para comparar valores ou expressões. E ele retorna sempre um valor booleano sendo true ou false

let resultado1 = 10 > 5; // Maior que (>)
console.log(resultado1); // Vai ser true porque 10 é maior que 5

let resultado2 = 10 < 5; // Menor que (<)
console.log(resultado2); // Vai ser false porque 10 não é menor que 5

let resultado3 = 10 >= 5; // Maior ou igual (>=)
console.log(resultado3); // Vai ser true porque 10 é maior ou igual a 5

let resultado4 = 10 <= 5; // Menor ou igual (<=)
console.log(resultado4); // Vai ser false porque 10 não é menor ou igual a 5

console.log("-----------SEPARADOR------------");

let resultado5 = 10 == "10"; // Igualdade de valor (==)
console.log(resultado5); // Vai ser true porque o valor de ambos os lados é o mesmo, mesmo que o tipo seja diferente

let resultado6 = 10 != "10"; // Diferença de valor (!=)
console.log(resultado6); // Vai ser false porque o valor de ambos os lados é o mesmo, mesmo que o tipo seja diferente

let resultado7 = 10 === "10"; // Igualdade de valor e tipo (===)
console.log(resultado7); // Vai ser false porque o valor é o mesmo, mas o tipo é diferente

let resultado8 = 10 !== "10"; // Diferença de valor ou tipo (!==)
console.log(resultado8); // Vai ser true porque o valor é o mesmo, mas o tipo é diferente

console.log("-----------SEPARADOR------------");

// Outro exemplo de Operadores Relacionais
const numero = 10;
console.log(numero > 5); // Maior que => vai se true
console.log(numero < 5); // Menor que => vai ser false
console.log(numero >= 5); // Maior ou igual => vai ser true
console.log(numero <= 5); // Menor ou igual => vai ser false
console.log(numero == 5); // Igualdade de valor => vai ser false
console.log(numero != 5); // Diferença de valor => vai ser true

console.log(numero === 5); // Igualdade de valor e tipo => vai ser false. Essa comparação é mais rigorosa porque compara o valor e o tipo de dado.
console.log(numero !== 5); // Diferença de valor ou tipo => vai ser true. Essa comparação é mais rigorosa porque compara o valor e o tipo de dado.