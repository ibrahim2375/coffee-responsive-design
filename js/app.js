// add shadow to header when scroll
const headerShadow = _ => {
    const header = document.getElementById('header');
    this.scrollY >= 50 ? header.classList.add('scroll_header')
        : header.classList.remove('scroll_header');
}
// window scroll excute a fun
window.addEventListener('scroll', headerShadow);

//=====================================================//
//scroll up show
const scroll_up = document.getElementById('scroll_up');
const scrollUpShow = () => {
    this.scrollY >= 350 ? scroll_up.classList.add('scroll_up_show') : scroll_up.classList.remove('scroll_up_show');
}
window.addEventListener('scroll', scrollUpShow);
// scroll up activate
const scrollUp = () => {
    window.scrollTo({
        top: 0,
    })
}
scroll_up.addEventListener('click', scrollUp);
// ================================= ScrollReveal//////////////////////////
const scroll_reveal = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400
    //reset:true for repeating
})

//add animation to landing
scroll_reveal.reveal('.landing_data');
scroll_reveal.reveal('.landing_img', { origin: 'bottom' });
//add animation to product
scroll_reveal.reveal('.product_data', { origin: 'left' });
scroll_reveal.reveal('.product_img', { origin: 'right' });
scroll_reveal.reveal('.products_card', { interval: 100 });
//add animation to ABOUT
scroll_reveal.reveal('.about_data', { origin: 'left' });
scroll_reveal.reveal('.about_img', { origin: 'right' });
//add animation to STEPS
scroll_reveal.reveal('.steps_data', { origin: 'bottom' });
//add animation to TESTMONIAL
scroll_reveal.reveal('.testmonial_data', { origin: 'right' });
scroll_reveal.reveal('.testmonial_img', { origin: 'left' });
//add animation to FOOTER
scroll_reveal.reveal('.footer_form', { origin: 'top' });
