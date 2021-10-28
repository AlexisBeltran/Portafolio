// *****VARIABLES*****
const Hamburger = document.querySelector('.hamburger img');
const Navegation = document.querySelector('.navegation');
const NavLink = document.querySelectorAll('.navegation a');
const Section = document.querySelectorAll('section');
const Menu = document.querySelector('.menu');

document.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('scroll', ActiveSection);
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

const ActiveSection = () => {
    let Current = '';
    Section.forEach(section => {
        const SectionTop = section.offsetTop;
        if(scrollY >= SectionTop){
            Current = section.getAttribute('id');
        }
    });  
    NavLink.forEach(nav => {
        nav.classList.remove('active-nav');
        if(nav.classList.contains(Current)){
            nav.classList.add('active-nav');
        }
    });
    console.log(Current);
}