
const navToggle = document.querySelector('.nav__toggle');
const navMenu = document.querySelector('.nav__menu');

// Add event listener to the toggle button
navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});



window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
})

const appearOnScroll = {};
const rows = document.querySelectorAll("row");
rows.forEach(row => {
    appearOnScroll.observe(row);
})