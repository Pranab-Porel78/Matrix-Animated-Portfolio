// EmailJS Form Submission
document.getElementById("contact-form")
.addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.sendForm(
        "service_x1l8sam",     // Your Service ID
        "template_onpq9sd",    // Replace with your Template ID
        this
    ).then(function() {
        alert("Message Sent Successfully 🚀");
        document.getElementById("contact-form").reset();
    }, function(error) {
        alert("Failed to send message ❌");
        console.log(error);
    });
});


const roles = ["Full Stack Developer", "MERN Stack Learner", "DSA Enthusiast"];
let i = 0;
let j = 0;
let currentRole = "";
let isDeleting = false;

function typeEffect() {
    currentRole = roles[i];
    if (!isDeleting) {
        document.getElementById("typing").innerHTML = currentRole.substring(0, j++);
        if (j > currentRole.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1000);
            return;
        }
    } else {
        document.getElementById("typing").innerHTML = currentRole.substring(0, j--);
        if (j === 0) {
            isDeleting = false;
            i = (i + 1) % roles.length;
        }
    }
    setTimeout(typeEffect, isDeleting ? 50 : 100);
}

typeEffect();
// Mobile Menu Toggle
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

// Navbar scroll effect
window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle("scrolled", window.scrollY > 50);
});
// Active link on scroll
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute("id");
        }
    });

    navItems.forEach(a => {
        a.classList.remove("active");
        if (a.getAttribute("href") === "#" + current) {
            a.classList.add("active");
        }
    });
});

// Animate skills when visible
const skillSection = document.querySelector("#skills");
const progressBars = document.querySelectorAll(".progress-bar");

function showSkills() {
    const sectionPos = skillSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 1.2;

    if (sectionPos < screenPos) {
        progressBars.forEach(bar => {
            bar.style.width = bar.getAttribute("data-width");
        });
    }
}

window.addEventListener("scroll", showSkills);
document.querySelector(".logo").addEventListener("click", function(e) {
    e.preventDefault();

    document.getElementById("hero").scrollIntoView({
        behavior: "smooth"
    });
});
// ===== MATRIX ANIMATION =====

const canvas = document.getElementById("matrixCanvas");
const ctx = canvas.getContext("2d");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const letters = "アァカサタナハマヤャラワ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const fontSize = 16;
const columns = canvas.width / fontSize;

const drops = [];

for (let x = 0; x < columns; x++) {
    drops[x] = 1;
}

function drawMatrix() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#38bdf8";
    ctx.font = fontSize + "px monospace";

    for (let i = 0; i < drops.length; i++) {
        const text = letters.charAt(Math.floor(Math.random() * letters.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975)
            drops[i] = 0;

        drops[i]++;
    }
}

setInterval(drawMatrix, 33);

// Resize Fix
window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});


