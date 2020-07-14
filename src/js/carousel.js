const slides = document.getElementsByClassName('products-card');
const arrowLeft = document.getElementById('arrow-left');
const arrowRight = document.getElementById('arrow-right');

const carousel = () => {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.order = i + 1;
        if (slides[i].style.order > 4) {
            slides[i].style.display = 'none';
        }
    }
}

carousel();

const slideChange = (direction) => {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'flex';
        if (direction == 'left') {
            slides[i].style.order = slides[i].style.order - 1;
        }
        if (direction == 'right') {
            slides[i].style.order = +slides[i].style.order + 1;
        }  
        if (slides[i].style.order == 0) {
            slides[i].style.order = slides.length;
        }      
        if (slides[i].style.order == slides.length + 1) {
            slides[i].style.order = 1;
        }
        if (slides[i].style.order > 4) {
            slides[i].style.display = 'none';
        }
    }   
}

arrowLeft.addEventListener('click', () => {
    slideChange('left');    
});

arrowRight.addEventListener('click', () => {
    slideChange('right');    
});
