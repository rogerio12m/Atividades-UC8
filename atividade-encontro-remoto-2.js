// Considere a quantidade de alunos presentes na sala, percorra do zero até o número total de alunos e retornar os seguintes resultados:

// se o número for par, escreva 'par' e o número correspondente.
// se o número for ímpar, escreva 'ímpar' e o número correspondente.
// se o número for zero, escreva 'zero' e o número correspondente.

for (let alunos = 0; alunos <= 17; alunos++) {
    
    if (alunos == 0) { // quando for zero
        console.log('zero ' + alunos);
    } else { //avalia se é par ou ímpar

        if (alunos % 2 == 0) {//par
            console.log('par ' + alunos);
        } else {//ímpar
            console.log('ímpar ' + alunos);
        }
    }
}//fim do for