// add classes for mobile navigation toggling
const body = document.querySelector("body");
const navbarMenu = document.querySelector("#nav-bar");
const toggle= document.querySelector("#nav-bar .toggle");

toggle.addEventListener('click', function() {
    toggle.classList.toggle("active");
    navbarMenu.classList.toggle("active");
    body.classList.toggle("open");
    // run the function to check the aria-expanded value
    ariaExpanded();
});

// checks the value of aria expanded on the ul and changes it accordingly whether it is expanded or not 
function ariaExpanded() {
    const unorderedList= document.querySelector('#expanded');
    const expanded = unorderedList.getAttribute('aria-expanded');

    if (expanded === 'false') {
        unorderedList.setAttribute('aria-expanded', 'true');
    } else {
        unorderedList,setAttribute('aria-expanded', 'false');
    }
}


// This script adds a class to the body after scrolling 100px
// and we used these body.scroll styles to create some on scroll 
// animations with the navbar

document.addEventListener('scroll', (e) => { 
    const scroll = document.documentElement.scrollTop;
    if(scroll >= 100){
document.querySelector('body').classList.add('scroll')
    } else {
    document.querySelector('body').classList.remove('scroll')
    }
});

                            
// Close navigation on link click
const navLinks = Array.from(document.querySelectorAll('#nav-bar a'));
for (const link of navLinks) {
    link.addEventListener('click', () => {
        // Remove active classes
        toggle.classList.remove("active");
        navbarMenu.classList.remove("active");
        body.classList.remove("open");
        
        // Update aria-expanded
        ariaExpanded();
    });
}