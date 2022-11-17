
const navLink = document.querySelector('.nav-link');

const menuOpen = document.querySelector('.menu-open');
const menuClose = document.querySelector('.menu-close');

const navImg = document.querySelectorAll('nav img');

navImg.forEach(img => img.addEventListener('click', toggleMenu));

function toggleMenu (e) {
  if (e.currentTarget.classList.contains('menu-open')){
    
    toggleMenuOpen();
    
}
else{
  
  toggleMenuClose();
  
}
}
