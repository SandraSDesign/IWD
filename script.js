//alert('hello world');
// Captura todas as perguntas e respostas
var perguntas = document.querySelectorAll('.pergunta');

// Adiciona um evento de clique a cada pergunta
perguntas.forEach(function(pergunta) {
    pergunta.addEventListener('click', function() {
        // Encontra a resposta correspondente
        var resposta = this.nextElementSibling;

        // Verifica se a resposta está visível
        if (resposta.style.display === 'none' || getComputedStyle(resposta).display === 'none') {
            // Se estiver oculta, mostra
            resposta.style.display = 'block';
        } else {
            // Se estiver visível, esconde
            resposta.style.display = 'none';
        }
    });
});
