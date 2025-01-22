alert("Seja bem-vindo ao jogo adivinhando o numero secreto!");
let intervalo = 100;
let numeroSecreto = parseInt(Math.random() * intervalo + 1);
let chute;
let tentativas = 0;

while(chute != numeroSecreto){
    tentativas++;
    chute = prompt('Chute um nuemro entre 1 e ' + intervalo);
    if(chute == numeroSecreto){
        alert(`Você acertou na ${tentativas}ª tentativa! o numero secreto é ${numeroSecreto}`);
    }else if (chute < numeroSecreto){
        alert(`Você errou! o numero secreto é maior que ${chute}`);
    }else if (chute > numeroSecreto){
        alert(`Você errou! o numero secreto é menor que ${chute}`);
    }
}