// CRIACAO DO MENU MOBILE //
const mobileBtn = document.querySelector('.btn-mobile');
const navLinks = document.getElementById('nav-links');
const icon = document.querySelector('.btn-mobile i');

if (mobileBtn) {
    mobileBtn.addEventListener('click', () => {
        if (navLinks) navLinks.classList.toggle('show');
        if (icon) {
            icon.classList.toggle('fa-times');
            icon.classList.toggle('fa-bars');
        }
        mobileBtn.classList.toggle('open');
    });
}
// SCROLL HEADER / adicionar sombra ao rolar a pagina   //
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (!header) return;
    if (window.scrollY > 0) {
        header.style.boxShadow = '0px 4px 10px rgba(0, 0, 0, 0.15)';
    } else {
        header.style.boxShadow = 'none';
    }
});