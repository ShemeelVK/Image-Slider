let currentSlideIndex = 0;
const images = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg'];

function nextSlide() {
    currentSlideIndex = (currentSlideIndex + 1) % images.length;
    updateSlider();
}

function prevSlide() {
    currentSlideIndex = (currentSlideIndex - 1 + images.length) % images.length;
    updateSlider();
}

function updateSlider() {
    const mainImage = document.getElementById('current-image');

    // Add a fade-out effect
    mainImage.style.opacity = 0;

    setTimeout(() => {
        // Change the image after the fade-out
        mainImage.src = images[currentSlideIndex];

        // Add a fade-in effect
        mainImage.style.opacity = 1;
    }, 500); // Match this timeout with the CSS transition duration

    // Update the smaller images on the right side
    const nextImages = document.querySelectorAll('.next-image img');
    for (let i = 0; i < nextImages.length; i++) {
        const nextIndex = (currentSlideIndex + i + 1) % images.length;
        nextImages[i].src = images[nextIndex];
    }
}

// Handle click on small images to update main image
document.querySelectorAll('.next-image').forEach((element) => {
    element.addEventListener('click', () => {
        const index = parseInt(element.getAttribute('data-index'));
        currentSlideIndex = (index - 1) % images.length;
        updateSlider();
    });
});

// Set the initial images when the page loads
updateSlider();
