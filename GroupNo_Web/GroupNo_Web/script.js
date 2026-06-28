function toggleMenu() {
    const navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("active");
}

const images = [
    "images/gallery1.jpg",
    "images/gallery2.jpg",
    "images/gallery3.jpg",
    "images/gallery4.jpg",
    "images/gallery5.jpg"
];

let currentIndex = 0;

function showSlide(index) {
    const sliderImage = document.getElementById("sliderImage");
    sliderImage.src = images[index];
}

function nextSlide() {
    currentIndex++;

    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }

    showSlide(currentIndex);
}

setInterval(nextSlide, 3000);

function validateForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();
    const formMessage = document.getElementById("formMessage");

    if (name === "" || email === "" || subject === "" || message === "") {
        formMessage.style.color = "red";
        formMessage.textContent = "Please fill in all fields.";
        return false;
    }

    if (!email.includes("@") || !email.includes(".")) {
        formMessage.style.color = "red";
        formMessage.textContent = "Please enter a valid email address.";
        return false;
    }

    formMessage.style.color = "green";
    formMessage.textContent = "Your message has been sent successfully!";

    return false;
}