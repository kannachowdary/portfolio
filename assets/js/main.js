/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header');
    if(this.scrollY >= 50) {
        header.classList.add('scroll-header');
    } else {
        header.classList.remove('scroll-header');
    }
}
window.addEventListener('scroll', scrollHeader);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');
    
const scrollActive = () =>{
  	const scrollY = window.pageYOffset;

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58, 
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

        if (sectionsClass) { 
            if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
                sectionsClass.classList.add('active-link');
            }else{
                sectionsClass.classList.remove('active-link');
            }     
        }                                               
	});
};
window.addEventListener('scroll', scrollActive);

/*=============== LIGHT DARK THEME ===============*/ 
const themeButton = document.getElementById('theme-button');
const lightTheme = 'light-theme'; // This class will be added to body for light theme
const iconTheme = 'bx-sun'; // Class for the sun icon (when light theme is active)

const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'light' : 'dark'; // Corrected: light if class exists
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-sun' : 'bx bx-moon'; // sun if class exists

if (selectedTheme) {
  document.body.classList[selectedTheme === 'light' ? 'add' : 'remove'](lightTheme); // Add light-theme if selected was light
  themeButton.classList[selectedIcon === 'bx bx-sun' ? 'add' : 'remove'](iconTheme); // Add sun icon if selected was sun
} else {
    // Default to light theme (Apple-inspired) if no selection
    document.body.classList.add(lightTheme); 
    themeButton.classList.add(iconTheme); 
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(lightTheme);
    themeButton.classList.toggle(iconTheme);
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
});

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000, 
    delay: 300,    
});

sr.reveal(`.home__data, .home__buttons`, {origin: 'left', interval: 100});
sr.reveal(`.home__handle`, {delay: 500, origin: 'bottom'});
sr.reveal(`.home__social`, {delay: 700, origin: 'left', distance: '40px'});
sr.reveal(`.home__scroll`, {delay: 700, origin: 'right', distance: '40px'});
sr.reveal(`.about__img`, {origin: 'left'}); 
sr.reveal(`.about__data`, {origin: 'right'});
sr.reveal(`.about__info .about__box`, {interval: 100, origin: 'bottom'});
sr.reveal(`.skills__content`, {interval: 150, origin: 'bottom'});
sr.reveal(`.experience__card`, {interval: 150, origin: 'bottom'});
sr.reveal(`.projects__card`, {interval: 150, origin: 'bottom'});
sr.reveal(`.publications__card`, {interval: 150, origin: 'bottom'});
sr.reveal(`.contact__content:nth-child(1) .contact__card`, {interval: 100, origin: 'left'});
sr.reveal(`.contact__content:nth-child(2) .contact__form div, .contact__content:nth-child(2) .button`, {interval: 100, origin: 'right'});

/*=============== CONTACT FORM (Basic Submission Example - Needs Backend) ===============*/
const contactForm = document.querySelector('.contact__form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); 
        const name = document.getElementById('contact-name').value;
        const email = document.getElementById('contact-email').value;
        const project = document.getElementById('contact-project').value;

        if (name && email && project) {
            console.log('Form Submitted:');
            console.log('Name:', name);
            console.log('Email:', email);
            console.log('Project:', project);
            alert('Thank you for your message, ' + name + '! I will get back to you soon.');
            contactForm.reset(); 
        } else {
            alert('Please fill out all fields.');
        }
    });
}