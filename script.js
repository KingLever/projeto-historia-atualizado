const avanca = document.querySelectorAll('.btn-proximo');

avanca.forEach(button => {
    button.addEventListener('click', function(){
        const atual = document.querySelector('.ativo');
        const proximoPasso = 'passo-' + this.getAttribute('data-proximo');

        atual.classList.remove('ativo');
        document.getElementById(proximoPasso).classList.add('ativo');
    })
})
document.addEventListener('DOMContentLoaded', () => {
    const passos = document.querySelectorAll('.passo');
    const btnsProximo = document.querySelectorAll('.btn-proximo');
    const audio = document.getElementById('background-music');

    
    function mostrarPasso(id) {
        passos.forEach(passo => {
            passo.classList.remove('ativo');
            if (passo.id === `passo-${id}`) {
                passo.classList.add('ativo');
            }
        });
    }

    
    mostrarPasso(0);

   
    btnsProximo.forEach(btn => {
        btn.addEventListener('click', () => {
            const proximo = btn.getAttribute('data-proximo');
            mostrarPasso(proximo);
            if (audio.paused) {
                audio.volume = 0.1; 
                audio.play(); 
            }
        });
    });
});
