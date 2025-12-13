// CRIACAO DO MENU MOBILE //
const mobileBtn = document.querySelector('.btn-mobile');
const navLinks = document.getElementById('nav-links');
const icon = document.querySelector('.btn-mobile i');

mobileBtn.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    icon.classLinst.toggle('fa-bars');
    icon.classList.toggle('fa-times');
})


/*
function transformarCarreira() {
  const FrontEnd = {
    nome: "Natan Philip";
    status: "Junior";
    sonho: "Programador Full-Stack"
  }
  
  return DevClub.formar(Front-End)
    .then(dev => dev.conquistarMercado())
    console.log("Aprovado!")
}
*/