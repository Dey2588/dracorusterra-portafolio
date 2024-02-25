//funcion de barra de navegacion
// Inicializar ScrollReveal
ScrollReveal().reveal('.container');
function menuFunction() {
    var menuBtn = document.getElementById('myNavMenu');
    menuBtn.classList.toggle("responsive");
}
/* añadiendo sombra sobre barra de navegacion */
window.onscroll = function() {HeaderShadow()
};
/* function HeaderShadow() {
    const navHeader = document.getElementById("header");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
        navHeader.style.height = "70px";
        navHeader.style.lineHeight = "70px";
    }else{
        navHeader.style.boxShadow = "none";
        navHeader.style.height = "90px";
        navHeader.style.lineHeight = "90px";
    }
} */
function HeaderShadow() {
    const navHeader = document.getElementById("header");
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
        navHeader.style.height = "70px";
        navHeader.style.lineHeight = "70px";
    } else {
        navHeader.style.boxShadow = "none";
        navHeader.style.height = "90px";
        navHeader.style.lineHeight = "90px";
    }
}


/*efecto de scritura*/

var typingEffect = new Typed(".typedText",{
    strings : ["Designer","Youtuber","Developer","Gamer"],
    loop: true,
    typeSpeed : 100,
    backSpeed : 80,
    backDeLay : 2000
})

/*scroll de animacion*/ 
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

/* -- HOME -- */
sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay: 100})
sr.reveal('.featured-text-info',{delay: 200})
sr.reveal('.featured-text-btn',{delay: 200})
sr.reveal('.social_icons',{delay: 200})
sr.reveal('.featured-image',{delay: 300})

/* -- PROJECT BOX -- */
sr.reveal('.Projects',{interval: 200})
/* -- HEADINGS -- */
sr.reveal('.top-header',{})
/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: true
})
srLeft.reveal('.imagen-mi',{delay: 100})
srLeft.reveal('.about-info',{delay: 100})
srLeft.reveal('.contact-info',{delay: 100})
  /* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
    origin: 'right',
    distance: '80px',
    duration: 2000,
    reset: true
})

srRight.reveal('.skills-box',{delay: 100})
srRight.reveal('.form-control',{delay: 100})

/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll('section[id]')
function scrollActive() {
const scrollY = window.scrollY;
sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 50,
    sectionId = current.getAttribute('id')
    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 
        document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
    }  else {
        document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

    }
})
}
window.addEventListener('scroll', scrollActive)