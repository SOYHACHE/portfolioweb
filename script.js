/*=========================== Toggle icon Navbar ===========================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*=========================== Scroll sections active link ===========================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    /*=========================== Sticky Navbar ===========================*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /*=======Remove Toggle icon and Navbar when click navbar Link (scroll)=======*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/*=========================== Scroll Reveal ===========================*/
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

/*=========================== TypedJS ===========================*/
    const TypedJS = new Typed('.multiple-text', {
        strings: ['Backend Developer', 'JavaScript Developer', 'SQL', 'Machine Learning'],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });

  // Formulario contacto
//  const form = document.getElementById('contact-form');
 // const successMessage = document.getElementById('form-success');

//  if (form) {
 //   form.addEventListener('submit', async function (e) {
//      e.preventDefault();

//      const formData = new FormData(form);

 //     try {
 //       const response = await fetch(form.action, {
 //         method: "POST",
   //       headers: {
 //           'Accept': 'application/json'
  //        },
 //         body: formData
 //       });

  //      if (response.ok) {
   //       form.reset();
  //        successMessage.style.display = 'block';
  //      } else {
 //         alert("❌ Error al enviar el formulario.");
//        }
//      } catch (error) {
//        alert("❌ Problema de red.");
//      }
//    });
//  }
//});
