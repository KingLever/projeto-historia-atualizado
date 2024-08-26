document.addEventListener('DOMContentLoaded', function() {
    var audio = document.getElementById('intro-audio');
    audio.volume = 0.5; // Define o volume para 50%

    var startButton = document.getElementById('start-button');
    startButton.addEventListener('click', function() {
        audio.play().catch(function(error) {
            console.log('Erro ao tentar tocar o áudio: ', error);
        });

        setTimeout(function() {
            audio.pause(); // Para o áudio após alguns segundos
            window.location.href = 'main.html'; // Redireciona para a página principal
        }, 3000); // Toca o áudio por 5 segundos antes de redirecionar
    });
});
