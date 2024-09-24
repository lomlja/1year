const slides = document.querySelectorAll('.slide');
const buttons = document.querySelectorAll('.skip-button');

const timings = [
    3000,  // Button for slide 1
    6000,  // Button for slide 2
    9000,  // Button for slide 3
    12000, // Button for slide 4
    15000, // Button for slide 5
    18000, // Button for slide 6
    21000, // Button for slide 7
    24000, // Button for slide 8
    27000, // Button for slide 9
    30000  // Button for slide 10
];

let currentSlide = 0;

// Function to show the next slide
function showSlide(index) {
    slides[currentSlide].classList.remove('active');
    buttons[currentSlide].classList.remove('show');
    
    currentSlide = index;

    slides[currentSlide].classList.add('active');
    setTimeout(() => {
        buttons[currentSlide].classList.add('show');
    }, timings[currentSlide]);
}

// Show the first slide
showSlide(0);

// Loop through slides
setInterval(() => {
    const nextSlide = (currentSlide + 1) % slides.length;
    showSlide(nextSlide);
}, 15000); // Change slides every 15 seconds
