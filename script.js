// ABRIR E FECHAR MENU

const menuBtn = document.querySelector('.menu-icon-btn');
menuBtn.addEventListener('click', () => {
    console.log("Funcionando!")
})

function openMenu(){
    document.querySelector('.overlay-content').style.width='100%';
}

function closeMenu(){
    document.querySelector('.overlay-content').style.width='0%';
}