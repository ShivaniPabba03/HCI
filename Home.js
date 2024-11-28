 function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('show');
}

// Draggable Image Slider with Dots
let currentSlide = 0;
const slides = document.getElementsByClassName('slider-img');
const dots = document.getElementsByClassName('dot');

function moveToSlide(slideIndex) {
    currentSlide = slideIndex;
    const sliderContainer = document.getElementById('slider-container');
    sliderContainer.style.transform = translateX(-${slideIndex * 100}%);
    updateDots();
}

function updateDots() {
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove('active-dot');
    }
    dots[currentSlide].classList.add('active-dot');
}

updateDots(); // Set initial active dot

function showThankYou(message) {
    // Display an alert with the thank-you message
    alert(message);

    // Optionally, dynamically update a message on the page
    // const container = document.querySelector('.container');
    // container.innerHTML = <h2>${message}</h2><p>We appreciate your input!</p>;

    // Prevent the default form submission
    return false;
}



