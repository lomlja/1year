let slideIndex = 0;
let slides = document.querySelectorAll('.slide');
let videos = document.querySelectorAll('video');
let backgroundMusic = document.getElementById('backgroundMusic');
let redirectUrl = 'https://lomlja.github.io/ja'; // Replace with the desired redirect URL

// Start playing background music on page load
backgroundMusic.play();

// Initialize by showing the first slide
showSlide(slideIndex);

function showSlide(n) {
    if (n < slides.length) {
        slides.forEach((slide, i) => {
            // Add transition effect for all slides except for 8th and 9th (index 7 and 8)
            if (i === 9 || i === 10 || i === 24 || i === 29  || i === 32 || i === 33 || i === 35 || i === 40 || i === 41 || i === 42) {
                slide.style.transition = 'none'; // No transition for 8th and 9th slides
            } else {
                slide.style.transition = 'transform 0.8s ease-in-out'; // Smooth transition for other slides
            }
            slide.style.transform = `translateX(-${slideIndex * 100}%)`;
        });

        // Pause all videos initially
        videos.forEach(video => video.pause());

        const activeSlide = slides[slideIndex].querySelector('video'); // Get the active slide's video
        if (activeSlide) {
            backgroundMusic.pause(); // Pause background music when video starts
            activeSlide.currentTime = 0; // Rewind the video
            activeSlide.muted = false;  // Unmute the video
            activeSlide.play(); // Play the video on the active slide

            // Automatically move to the next slide when the video ends
            activeSlide.onended = function() {
                backgroundMusic.play(); // Resume background music
                document.querySelector('.next').click(); // Simulate a click on the "Next" button
            };
        } else {
            // Resume background music if the current slide is not a video
            backgroundMusic.play();
        }
    } else {
        // If it's the last slide, redirect to the URL
        window.location.href = redirectUrl;
    }
}

function changeSlide(n) {
    slideIndex += n;

    // Check if we are on the last slide and need to redirect
    if (slideIndex >= slides.length) {
        window.location.href = redirectUrl;
    } else {
        showSlide(slideIndex);
    }
}

// Optional: autoplay for each slide (e.g., every 5 seconds)
// Uncomment if you want automatic sliding
// setInterval(() => {
//     changeSlide(1);
// }, 5000);
