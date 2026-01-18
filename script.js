// ===============================
// Mobile Menu Toggle
// ===============================
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}

// ===============================
// Smooth Scrolling (for # anchors)
// ===============================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
            document.getElementById('navLinks').classList.remove('active');
        }
    });
});

// ===============================
// Contact Form Alert
// ===============================
function handleSubmit(event) {
    event.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    event.target.reset();
}

// ===============================
// Navbar Scroll Shadow
// ===============================
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    nav.style.boxShadow = window.scrollY > 100
        ? '0 10px 30px rgba(0, 217, 255, 0.1)'
        : 'none';
});

// ===============================
// Learn More — Show / Hide Hologram Card
// ===============================
function toggleLearnMore() {
    const card = document.getElementById("learnMoreContent");

    if (card.style.display === "none" || card.style.display === "") {
        card.style.display = "block";
        card.classList.add("fadeIn");
    } else {
        card.style.display = "none";
    }
}
// Pricing Card Hover Animation
const pricingCards = document.querySelectorAll('.pricing-card');

pricingCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.05)';
        card.style.boxShadow = '0 15px 40px rgba(0, 217, 255, 0.3)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
        card.style.boxShadow = '';
    });
});
document.querySelectorAll('.apply-btn').forEach(button => {
    button.addEventListener('click', () => {
        // Open the apply page
        window.location.href = "apply.html";
    });
});
// ===============================
// FAQ Toggle
// ===============================
document.querySelectorAll(".faq-question").forEach(button => {
    button.addEventListener("click", () => {
        const answer = button.nextElementSibling;
        const arrow = button.querySelector(".arrow");

        // Toggle answer visibility
        answer.style.display = answer.style.display === "block" ? "none" : "block";

        // Toggle arrow sign
        arrow.textContent = arrow.textContent === "+" ? "-" : "+";
    });
});
