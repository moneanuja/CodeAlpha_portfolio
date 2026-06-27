/* Scroll Reveal Animation */

const revealElements = document.querySelectorAll(
".about-box, .skill-card, .certificate-card, .project-card, .contact-box"
);

function revealOnScroll(){

    revealElements.forEach(element => {

        const windowHeight = window.innerHeight;

        const revealTop = element.getBoundingClientRect().top;

        if(revealTop < windowHeight - 100){

            element.style.opacity = "1";

            element.style.transform = "translateY(0)";

        }

    });

}

/* Initial Hidden State */

revealElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform = "translateY(40px)";

    element.style.transition = "all 0.8s ease";

});

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

/* Navbar Active Link */

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop;

        if(pageYOffset >= sectionTop - 200){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href").includes(current)){

            link.classList.add("active");

        }

    });

});

/* Smooth Hover Glow */

const cards = document.querySelectorAll(
".skill-card, .certificate-card, .project-card"
);

cards.forEach(card => {

    card.addEventListener("mousemove", () => {

        card.style.transform = "translateY(-10px) scale(1.02)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0) scale(1)";

    });

});

/* Typing Effect */

const heroTitle = document.querySelector(".hero h1");

const text =
"Building Creative And Modern Digital Experiences.";

let index = 0;

heroTitle.innerHTML = "";

function typeEffect(){

    if(index < text.length){

        heroTitle.innerHTML += text.charAt(index);

        index++;

        setTimeout(typeEffect,50);

    }

}

typeEffect();