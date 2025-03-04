const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

/* Menu show */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

/* Menu hidden */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
};
/* ================= HOME ================= */
const shadowHeader = () =>{
    const header = document.getElementById('header')
    // Add a class if the bottom offset is greater than 50 of the viewport
    this.scrollY >= 50 ? header.classList.add('shadow-header') 
                       : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 300,
});


sr.reveal('.home_data');
sr.reveal('.home_dish', { delay: 500, distance: '1080px', origin: 'bottom' });
sr.reveal('.home_burger', { delay: 1200, distance: '1080px', duration: 1500 });
sr.reveal('.home_ingredient', { delay: 1600, distance: '1080px', interval: 100 });
sr.reveal(".banner__content .section__header");
sr.reveal(".banner__content .section__description", { delay: 500 });
sr.reveal(".banner__card", { delay: 1000, interval: 500 });

sr.reveal(".banner__image", {
    origin: "right", 
    distance: "100px", 
    duration: 2000, 
    delay: 500, 
    easing: "ease-in-out", 
	interval: 500
});
sr.reveal(".menu__card", { delay: 500, interval: 200, origin: "bottom", distance: "80px" });