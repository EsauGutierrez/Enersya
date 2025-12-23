// Esperar a que el documento cargue
document.addEventListener('DOMContentLoaded', () => {
    const btnMenu = document.getElementById('btn-menu-mobile');
    const menu = document.getElementById('mobile-menu');

    if(btnMenu && menu){
        btnMenu.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });
    }
});