//Mostra uma caixa de diálogo de aviso com o conteúdo opcionalmente especificado e um botão OK.
alert('Boas vindas ao jogo do número secreto!');
//Declarando uma variável e o valor do número secreto que essa variável recebe.
let numeroSecreto = 4;
console.log(numeroSecreto);
//Exibe uma caixa de diálogo com uma mensagem opcional solicitando ao usuário a entrada de algum texto e armazena na variável "chute".
let chute;
let tentativas = 1;

//Enquanto chute não for igual ao número secreto
while (chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e 10');

    //Se o chute for igual ao número secreto
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        //tentativas = tentativas + 1;
        tentativas++;
    }
}

// alert('Isso ai! Você descobriu o número secreto ' + numeroSecreto + ' !')
// ${numeroSecreto} = Forma de concatenação com template strings
// if (tentativas > 1) {
//     alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.`)
// } else {
//     alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa.`)
// }

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`)










