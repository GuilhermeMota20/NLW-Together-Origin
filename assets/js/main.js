// MENU SHOW
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

// sistema de repetição.
for(const element of toggle) {
    // adicionando evento aos elementos. Ao clicar execute a função anônima.
    element.addEventListener('click', function () {
        // efetuar uma troca (toggle). Se hover a classe SHOW na nav será removida, caso não possua classe, ela será adicionada.
        nav.classList.toggle('show')
    })
}

// -----------------------------------------------------

// LINK'S CLICK
const links = document.querySelectorAll('nav ul li a')
for(const link of links) {
    link.addEventListener('click', function () {
        nav.classList.remove('show')
    })
}

// -----------------------------------------------------

// SCROLL SHADOW'S HEADER
// mudar o header ao rolar a página
const header = document.querySelector('#header')
const navHeight = header.offsetHeight
function changeHeaderWhenScroll() {
    if(window.scrollY >= navHeight) {
        // maior que a altura do header
        header.classList.add('scroll')

    } else {
        // menor que a altura do header
        header.classList.remove('scroll')

    }
}

// -----------------------------------------------------

// TESTIMONIALS CAROUSEL SLIDER SWIPERJS
const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true,
    breakpoints : {
        767: {
            slidesPerView: 2,
            setWrapperSize: true
        }
    }
});

// -----------------------------------------------------

// SCROLLREVEAL
// Mostrar elementos quando rolar a página
const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '50px',
    duration: 750,
    reset: true
})

scrollReveal.reveal(
    `#home .img, #home .text,
     #about .img, #about .text,
     #services header, #services .card,
     #testimonials header, #testimonials .testimonials,
     #contact .text, #contact .links,
     footer .brand, footer .social

    `, { interval: 100 }
)

// -----------------------------------------------------

// BUTTON TOP SHOW
// pegar o botão da tela
const backToTopButton = document.querySelector('.back-to-top')
function backtoTop() {
    if(window.scrollY >= 560) {
        backToTopButton.classList.add('show')

    } else {
        backToTopButton.classList.remove('show')
    }

}

// -----------------------------------------------------

// MENU ACTIVE 
const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection() {
    const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4
    
    for(const section of sections) {
        const sectionTop = section.offsetTop // pegar topo da seção 
        const sectionHeight = section.offsetHeight // pegar a altura 
        const sectionId = section.getAttribute('id') // pegar o id 

        const checkpointStart = checkpoint >= sectionTop
        const checkpointEnd = checkpoint <= sectionTop + sectionHeight

        if(checkpointStart && checkpointEnd) {
            document
                .querySelector('nav ul li a[href*=' + sectionId + ']')
                .classList.add('active')

        } else {
            document
                .querySelector('nav ul li a[href*=' + sectionId + ']')
                .classList.remove('active')

        }
    }
}


// -----------------------------------------------------

// Agrupamento de funções com o mesmo proposito (no caso seria o scroll)
window.addEventListener('scroll', function () {
    changeHeaderWhenScroll()
    backtoTop()
    activateMenuAtCurrentSection()
})

