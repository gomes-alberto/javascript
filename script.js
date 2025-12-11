// 1° TÓPICO: Declaração de Variáveis e seus tipos
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

// Chamando a função
mostrarInfrCurso();

// Chamando as variáveis fora da função (Irá gerar erro)
// console.log(autorCurso); // Erro
// console.log(nomeCurso); // Erro
// console.log(duracaoCurso); // Erro
















// 2° Tópico: Tipos de Dados (Primitivos)
// string. number, boolean, null, undefined
// Também temos os tipos de dados complexos como: array, aobject, function, NaN, infinity



