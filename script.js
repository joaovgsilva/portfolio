// ===== MOBILE MENU =====
let menuBtn = document.getElementById('menu-btn');

menuBtn.addEventListener('click', function(e){
    document.querySelector('body').classList.toggle('mobile-menu-active');
    this.classList.toggle('fa-xmark');
})

// ===== TYPING EFFECT =====
let typed = new Typed('.auto-input',{
    strings: ['Front-End Developer', 'Web Designer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 2000,
    loop: true,
})

// ===== ACTIVE LINK STATE ON SCROLL =====

// ===== GET ALL LINKS =====
let navLinks = document.querySelectorAll('nav ul li a');
// ===== GET ALL SECTIONS =====
let sections = document.querySelectorAll('section');

window.addEventListener('scroll', function (){
    const scrollPos = window.scrollY + 20;
    sections.forEach(section => {
        if(scrollPos > section.offsetTop && scrollPos < (section.offsetTop + section.offsetHeight)){
            navLinks.forEach(link => {
                link.classList.remove('active');
                if(section.getAttribute('id') === link.getAttribute('href').substring(1)){
                    link.classList.add('active')
                }
            });
        }
    });
});
