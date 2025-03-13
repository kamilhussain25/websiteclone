
function toggleMenu() {
    document.querySelector('.menu').classList.toggle('active')
}
const words = ["Gain Hands On Experience|", "On Your Desired salary|", "Get Hired!"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const textElement = document.getElementById("typewriter");
function typeEffect() {
    let currentWord = words[wordIndex];
    let displayText = isDeleting ? currentWord.substring(0, charIndex - 1) : currentWord.substring(0, charIndex + 1);
    textElement.innerHTML = displayText;

    if (!isDeleting && charIndex === currentWord.length) {
        setTimeout(() => isDeleting = true, 1000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
    }

    charIndex += isDeleting ? -1 : 1;
    setTimeout(typeEffect, isDeleting ? 100 : 200);
}

typeEffect();
const images = [
    "images/Capture01.PNG", // Red Image
    "images/Capture02.PNG", // Green Image
     // Blue Image
];

let currentIndex = 0; // Start index
const heroImage = document.getElementById("heroImage");

// Function to change the image every 2 seconds
function changeImage() {
    currentIndex = (currentIndex + 1) % images.length; // Loop through images
    heroImage.src = images[currentIndex];
}

// Change image every 2 seconds
setInterval(changeImage, 1000);
document.addEventListener("DOMContentLoaded", function () {
    gsap.to("#text-section", {
        duration: 1,
        opacity: 1,
        x: 0,
        ease: "power2.out"
    });

    gsap.to("#image-section", {
        duration: 1,
        opacity: 1,
        x: 0,
        ease: "power2.out",
        delay: 0.5
    });
});
document.addEventListener("DOMContentLoaded", function () {
    let img = document.getElementById("image-section");
    let isHidden = true;

    setInterval(() => {
        if (isHidden) {
            img.classList.remove("hidden-image");
            img.classList.add("show-image");
        } else {
            img.classList.remove("show-image");
            img.classList.add("hidden-image");
        }
        isHidden = !isHidden;
    }, 2000); // Change every 2 seconds
});
