let dots = document.getElementsByClassName('dot'),
    dotsArea = document.getElementsByClassName('arrows-dots')[0],
    slides = document.getElementsByClassName('slide-img'),
    nav = document.getElementsByClassName('projects-link-a'),
    navArea = document.getElementsByClassName('slider-nav')[0],
    arrow = document.getElementsByClassName('slider-change'),
    prevBtn = document.getElementById('left'),
    nextBtn = document.getElementById('right'),
    slideIndex = 1;

showSlides(slideIndex);

function showSlides(n) {
    if (n < 1) {
        slideIndex = slides.length;
    } else if (n > slides.length) {
        slideIndex = 1;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove('active');
        nav[i].classList.remove('projects-link__active')
    }
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].classList.add('active');
    nav[slideIndex - 1].classList.add('projects-link__active')
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

prevBtn.onclick = function () {
    plusSlides(-1);
}

nextBtn.onclick = function () {
    plusSlides(1);
}

dotsArea.onclick = function (e) {
    for (let i = 0; i < dots.length + 1; i++) {
        if (e.target.classList.contains('dot') && e.target == dots[i - 1]) {
            currentSlide(i);
        }
    }
}

navArea.onclick = function (e) {
    for (let i = 0; i < nav.length + 1; i++) {
        if (e.target.classList.contains('projects-link-a') && e.target == nav[i - 1]) {
            currentSlide(i);
        }
    }
}