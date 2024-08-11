let currentSlide = 0;
const slideInterval = 3000; // 3 seconds
let slideTimer;

function showSlide(index) {
    const slides = document.querySelectorAll('.slideimages');
    const totalSlides = slides.length;

    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }

    const offset = -currentSlide * 1000;
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
}

function moveSlide(step) {
    showSlide(currentSlide + step);
    resetAutoplay();
}

function startAutoplay() {
    slideTimer = setInterval(() => {
        moveSlide(1);
    }, slideInterval);
}

function stopAutoplay() {
    clearInterval(slideTimer);
}

function resetAutoplay() {
    stopAutoplay();
    startAutoplay();
}

showSlide(currentSlide);
startAutoplay();




/* ---------------------------------- Contact Modal ---------------------------------- */
var btnSubmit = document.querySelector('.submit');
// console.log(btnSubmit);
var modal = document.querySelector('.modal-container');
// console.log(modal);

if(btnSubmit){
    btnSubmit.addEventListener('click', function(){
        modal.classList.add('show');
        const next = document.querySelector('.next');
        // console.log(next);
        next.setAttribute('value', 'home.html')

    });
}

var btnCloseModal = document.querySelector('.close-modal');
if(modal) {
    btnCloseModal.addEventListener('click', function() {
        modal.classList.remove('show');    
    });
}
