const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

// --------------Scroll Header-------------------
window.addEventListener('scroll', function () {
    const header = $('#header')
    if (window.scrollY > 80) {
        header.classList.add('active')
    } else {
        header.classList.remove('active')
    }
})



// --------------Filter Project-------------------
const nameFilter = $$('.filter-name')

nameFilter.forEach(item => {
    item.onclick = function () {
        $('.filter-name.active').classList.remove('active')

        this.classList.add('active')
    }
});

//---------------MIXITUP FILTER-----------------
var mixer = mixitup('.portfolio-project', {
    selectors: {
        target: '.project-card'
    },
    animation: {
        duration: 300
    }
});

//---------------SCROLL SECTIONS ACTIVE LINK-----------------

const sections = $$('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            $('a[href*=' + sectionId + ']').classList.add('active')
        } else {
            $('a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}

window.addEventListener('scroll', scrollActive)

// Go to top
window.addEventListener('scroll', function () {
    const goTop = $('.goto-top')
    if (window.scrollY > 200) {
        goTop.classList.add('active')
    } else {
        goTop.classList.remove('active')
    }
})

// Dark mode

const navIcon = $('.nav-icon')
const iconBtn = $('.nav-icon i')

navIcon.onclick = function () {
    document.body.classList.toggle('dark-mode')
    iconBtn.classList.toggle('bx-sun')
}