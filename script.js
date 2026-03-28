const invitationContainer = document.getElementById('invitationContainer');
const btnCloseX = document.getElementById('btnCloseX');
const btnConfirm = document.querySelector('.btn-confirm');

// Função para abrir o convite
invitationContainer.addEventListener('click', function(e) {
    // Se o clique for no botão de fechar ou no de confirmar, não interfere
    if (e.target === btnCloseX || e.target === btnConfirm) {
        return;
    }
    
    // Adiciona a classe '.opened' para acionar as animações
    if (!this.classList.contains('opened')) {
        this.classList.add('opened');
    }
});

// Impede que o clique no X propague para o container e tente reabrir o convite
btnCloseX.addEventListener('click', (e) => {
    e.stopPropagation();
});