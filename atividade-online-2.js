// -Se a data do evento for posterior à data atual, permitir o evento; senão, alertar que o cadastro não será permitido por data inválida.
// -Se o participante for maior de 18 anos, permitir o cadastro; senão, alertar que o cadastro não é permitido pela idade.
// -Listar participantes e palestrantes por evento.
// -Enquanto a quantidade de participantes for inferior a 100, permitir cadastro; senão, alertar que o cadastro não será permitido por ter excedido o limite.

let entrada = require("readline-sync");

let nomeDoEvento = entrada.question("Digite o nome do evento: ")

let dataDigitada = entrada.question("Digite a data do evento conforme o exemplo: DD/MM/AAAA ") 

const DataFormatada = dataDigitada.split("/").reverse().join("/")

data = new Date(DataFormatada);
dataAtual = new Date();

if (data > dataAtual) {

  console.log(idade = entrada.question("Digite sua idade: "));

  if (idade >= 18) {
      console.log(participantes = entrada.question("Digite quantidade de convidados: "));

      if (participantes <= 100) {
        console.log("Evento cadastrado! " + " Nome do evento: " + nomeDoEvento + " Data: " + dataDigitada + " Número de participantes: " + participantes);
      
      } else {
        console.log("Quantidade máxima de participantes é 100. Fim do programa! ");
      }

  } else {
    console.log("Idade não permitida. Fim do programa!");
  }

} else {
  console.log('Data inválida. Fim do programa!');
}




    


