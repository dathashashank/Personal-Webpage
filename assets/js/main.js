/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

// MENU SHOW 
// Validate if constant exists 
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

// MENU HIDDEN 
// validte if constant exists
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}
/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__links')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== SWIPER PROJECTS ===============*/
let swiperProjects = new Swiper(".projects__container", {
    loop: true,
    spaceBetween: 24,

    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    breakpoints: {
        1200: {
          slidesPerView: 2,
          spaceBetween: -56,
        },
    },
  });

/*=============== SWIPER TESTIMONIAL ===============*/
let swiperTestimonial = new Swiper(".testimonial__container", {
    grabCursor: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
      contactName = document.getElementById('contact-name'),
      contactEmail = document.getElementById('contact-email'),
      contactProject = document.getElementById('contact-project'),
      contactMessage = document.getElementById('contact-message')
      
const sendEmail = (e) => {
    e.preventDefault()
    // check if the field has a value
    if(contactName.value === ''|| contactEmail.value === '' || contactProject.value === ''){
      // add and remove color
      contactMessage.classList.remove('color-blue')
      contactMessage.classList.add('color-red')

      //show message
      contactMessage.textContent = 'Write all the input fields '
    }else{
      // serviceID - templateID - #form - publicKey
      emailjs.sendForm('service_q3kbo9u','template_eddij9q','#contact-form','A1R_J4j-KBEw3GkaH')
        .then(() =>{
        //show message and add color
        contactMessage.classList.add('color-blue')
        contactMessage.textContent = 'Message Sent'

        //Remove message after five seconds
        setTimeout(() =>{
            contactMessage.textContent = ''
        }, 3000)
    }, (error) =>{
      alert('OOPS! SOMETHING HAS FAILED....', error)
    })
  
  //To Clear the input field
  contactName.value = ''
  contactEmail.value = ''
  contactProject.value = ''
}
}
contactForm.addEventListener('submit', sendEmail)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
// const sections = document.querySelectorAll('section[id]')

// const scrollActive = () =>{
//       const scrollY = window.pageYOffset

//       sections.forEach(current =>{
//         const sectionHeight = current.offsetHeght,
//                 sectionTop = current.offsetTop - 58,
//                 sectionId = current.getAttribute('id'),
//                 sectionClass = document.querySelector('.nav__menu a[href*='+sectionId + ']')
//         if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
//             sectionClass.classList.add('active-link')
//         }else{
//           sectionClass.classList.remove('active-link')   
//         }
//       })
// }
// window.addEventListener('scroll',scrollActive)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
  const scrollUp = document.getElementById('scroll-up')
  this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                      : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== DARK LIGHT THEME ===============*/ 


/*=============== CHANGE BACKGROUND HEADER ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/

