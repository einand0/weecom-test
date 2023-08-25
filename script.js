// ABRIR E FECHAR MENU

const menuBtn = document.querySelector('.menu-icon-btn');
menuBtn.addEventListener('click', () => {
    console.log("Funcionando!")
})

function openMenu(){
    document.querySelector('.overlay-content').style.width='100%';
}

function closeMenu(){
    document.querySelector('.overlay-content').style.width='0%';
}

// OUR PROJECTS CARROUSEL
const controls = document.querySelectorAll('.control');

let currentItem = 0;
const items = document.querySelectorAll('.item');
const maxItems = items.length;

controls.forEach(control => {
    control.addEventListener('click', () => {
        const isLeft = control.classList.contains("arrow-left");

        if(isLeft){
            currentItem -= 1;
        } else{
            currentItem += 1;
        }
        
        if(currentItem >= maxItems){
            currentItem = 0;
        }

        if(currentItem < 0){
            currentItem = maxItems - 1;
        }

        items.forEach(item => item.classList.remove('current-item'));

        items[currentItem].scrollIntoView({
            inline: "center",
            behavior: "smooth",
        })

        items[currentItem].classList.add("current-item");
    })
})


// TESTIMONIALS CARROUSEL


const testimonialControls = document.querySelectorAll('.testimonial-control');

let testimonialCurrentItem = 0;
const testimonialItems = document.querySelectorAll('.testimonial-card');
const testimonialMaxItems = testimonialItems.length;

testimonialControls.forEach(testimonialControl => {
    testimonialControl.addEventListener('click' , () => {
        const isLetf = testimonialControl.classList.contains('arrow-left');

        if(isLetf){
            testimonialCurrentItem -= 1;
        } else{
            testimonialCurrentItem += 1;
        }

        if(testimonialCurrentItem >= testimonialMaxItems){
            testimonialCurrentItem = 0;
        }

        if(testimonialCurrentItem < 0){
            testimonialCurrentItem = testimonialMaxItems - 1;
        }

        testimonialItems.forEach(testimonialItem => testimonialItem.classList.remove('current-testimonial-item'));

        testimonialItems[testimonialCurrentItem].scrollIntoView({
            inline: "center",
            behavior: "smooth",
        })

        testimonialItems[testimonialCurrentItem].classList.add("current-testimonial-item");
    })
})