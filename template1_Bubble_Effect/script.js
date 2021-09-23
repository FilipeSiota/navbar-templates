const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links .link');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open'); // enable or disable the open class on css

    links.forEach(link => { // for each element of links
        link.classList.toggle('fade'); // enable or disable the fade class on css
    })
})