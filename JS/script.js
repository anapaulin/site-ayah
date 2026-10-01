// ==========================================
// AYAH — SCRIPT
// ==========================================


// ANO DO RODAPÉ
const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}


// ==========================================
// MENU MOBILE
// ==========================================

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

if (menuBtn && nav) {

    menuBtn.addEventListener("click", () => {

        nav.classList.toggle("active");

        if (nav.classList.contains("active")) {
            menuBtn.textContent = "×";
        } else {
            menuBtn.textContent = "☰";
        }

    });


    document.querySelectorAll(".nav a").forEach(link => {

        link.addEventListener("click", () => {

            nav.classList.remove("active");
            menuBtn.textContent = "☰";

        });

    });

}


// ==========================================
// HEADER
// ==========================================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (!header) return;

    if (window.scrollY > 60) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});


// ==========================================
// SCROLL SUAVE
// ==========================================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(event) {

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (!target) return;

        event.preventDefault();

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});


// ==========================================
// HOVER NOS PROJETOS
// ==========================================

document.querySelectorAll(".project").forEach(project => {

    project.addEventListener("mouseenter", () => {

        project.style.transform = "translateY(-8px)";

    });

    project.addEventListener("mouseleave", () => {

        project.style.transform = "translateY(0)";

    });

});


// ==========================================
// WHATSAPP
// ==========================================

const whatsappBtn = document.getElementById("whatsappBtn");
const whatsappOptions = document.getElementById("whatsappOptions");

if (whatsappBtn && whatsappOptions) {

    whatsappBtn.addEventListener("click", () => {
        whatsappOptions.classList.toggle("active");
    });

}