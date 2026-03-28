const invitationContainer = document.getElementById('invitationContainer');
const btnCloseX = document.getElementById('btnCloseX');
const btnConfirm = document.querySelector('.btn-confirm');

// Abrir o convite
invitationContainer.addEventListener('click', function(e) {
    if (e.target === btnCloseX || e.target === btnConfirm || 
        e.target.closest('.btn-confirm') || e.target.closest('.btn-close-x')) {
        return;
    }
    
    if (!this.classList.contains('opened')) {
        this.classList.add('opened');
    }
});

// Fechar com o X
btnCloseX.addEventListener('click', (e) => {
    e.stopPropagation();
});

// Opcional: Permitir fechar clicando fora do papel (se quiser)
document.addEventListener('click', (e) => {
    if (invitationContainer.classList.contains('opened') && 
        !e.target.closest('.paper') && 
        !e.target.closest('.card-external')) {
        // Se quiser permitir fechar clicando fora, descomente a linha abaixo:
        // invitationContainer.classList.remove('opened');
    }
});