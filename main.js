
// Variável que conta quantas vezes o botão foi clicado
let contadorCliques = 0;

function mostrarMensagem() {
    // Pega o elemento com id="mensagem"
    const mensagem = document.getElementById("mensagem");

    // Aumenta o número de cliques a cada vez que o botão é pressionado
    contadorCliques++;

    // Se for o primeiro clique:
    if (contadorCliques === 1) {
        mensagem.textContent = "🎉 Você clicou pela primeira vez!";
    }
    // Se for o segundo clique:
    else if (contadorCliques === 2) {
        mensagem.textContent = "✨ Agora é o segundo clique!";
    }
    // A partir do terceiro clique, alterna as mensagens
    else {
        contadorCliques = 0; // zera o contador para recomeçar
        mensagem.textContent = "🔁 Voltamos ao início! Clique novamente.";
    }
}
