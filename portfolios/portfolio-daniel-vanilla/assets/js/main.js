/** ==========>>>>  Mostrar/Ocultar menu  <<<<========== */
const navMenu = document.getElementById('nav-menu')

function showHideMenu(){
  if(navMenu){
    navMenu.classList.toggle('show-menu')
  }
}

document.getElementById('menu-responsive').addEventListener('click', showHideMenu)