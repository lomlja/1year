let slideIndex = 0;
let slides = document.querySelectorAll('.slide');
let videos = document.querySelectorAll('video');
let backgroundMusic = document.getElementById('backgroundMusic');
let redirectUrl = 'https://example.com'; // Replace with the desired redirect URL

// Start playing background music on page load
backgroundMusic.play();

// Initialize by showing the first slide
showSlide(slideIndex);

function showSlide(n) {
    // Move the slides if not exceeding bounds
    if (n < slides.length) {
        slides.forEach((slide, i) => {
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

            // Resume background music when the video ends
            activeSlide.onended = function() {
                backgroundMusic.play();
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
