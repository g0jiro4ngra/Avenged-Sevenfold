
// MENU MOBILE

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    const menuAberto = navLinks.classList.contains("active");

    menuToggle.textContent = menuAberto ? "✕" : "☰";
    menuToggle.setAttribute("aria-expanded", menuAberto);
});


// FECHAR MENU AO CLICAR EM UM LINK

const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-expanded", "false");
    });
});


// BOTÃO VOLTAR AO TOPO

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// ANIMAÇÕES AO ROLAR A PÁGINA

const sections = document.querySelectorAll(
    ".section-title, .about-content, .member-card, .album-card, .gallery-grid img, .fact-card"
);

sections.forEach(element => {
    element.classList.add("reveal");
});

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("active");

            observer.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.15
});

sections.forEach(element => {
    observer.observe(element);
});


// ANO AUTOMÁTICO NO CONSOLE

console.log("Welcome to the Avenged Sevenfold Fanpage!");
console.log("Hail to the King!");
