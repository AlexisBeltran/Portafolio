// *****VARIABLES*****
const Hamburger = document.querySelector('.hamburger img');
const Navegation = document.querySelector('.navegation');
document.addEventListener('DOMContentLoaded', () => {
    Hamburger.addEventListener('click', MenuHamburguesa);
});
// ****FUNCIONES*****
const MenuHamburguesa = (e) => {
    e.preventDefault();
    if(!Navegation.classList.contains('active')){
        Navegation.classList.add('active');
    }else{
        Navegation.classList.remove('active');
    }
}