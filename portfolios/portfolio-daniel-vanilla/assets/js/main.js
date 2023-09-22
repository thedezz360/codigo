/** ==========>>>>  Mostrar menu  <<<<========== */
const navMenu = document.getElementById('nav-menu')
console.log(navMenu)
function showMenu(){
  console.log({navMenu})
  if(navMenu){
    navMenu.classList.contains('show-menu') ?
    navMenu.classList.remove('show-menu') :
    navMenu.classList.add('show-menu')
  }
}

document.getElementById('menu-responsive').addEventListener('click', showMenu)

/** ==========>>>>  Ocultar menu  <<<<========== */


function hideMenu (){
  if(navMenu){
    navMenu.classList.contains('show-menu') ?
    navMenu.classList.remove('show-menu') :
    navMenu.classList.add('show-menu')
  }
}

document.getElementById('navClose').addEventListener('click', hideMenu)