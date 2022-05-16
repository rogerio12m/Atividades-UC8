// Se a peça possuir um peso superior a 100gramas, pode cadastrar.
// Dada a capacidade de cada caixa, caso a lista de peças seja superior a 10, imprima uma mensagem informando não ter capacidade suficiente.
// Caso a peça tenha um nome com quantidade inferior a 3 caracteres, informe uma mensagem de erro.

let listaPecas = 30;
let peso = 90;
let nomePeca = "Cilindro Mestre";//string

// Correção 1
if (peso >= 100 ) {
    console.log("Peça tem peso suficiente para cadastrar");

    if (listaPecas >= 10) {
        console.log("A lista está cheia, não tem capacidade suficiente para cadastrar");
    }

    if(nomePeca.length < 3) {
        console.log("Nome muito curto!!");
    }
} else {
    console.log("Peça não será cadastrada");
}

// Correção 2
if (peso >= 100 ) {
    console.log("Peça tem peso suficiente para cadastrar");
} 

if (listaPecas >= 10) {
    console.log("A lista está cheia, não tem capacidade suficiente para cadastrar");
}

if(nomePeca.length < 3) {
    console.log("Nome muito curto!!");
}

console.log("Fim do programa");