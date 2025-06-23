// Fade-in on scroll
const faders = document.querySelectorAll('.fade-in');
const appearOptions = { threshold: 0.3, rootMargin: "0px 0px -100px 0px" };
const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  });
}, appearOptions);
faders.forEach(fader => appearOnScroll.observe(fader));

// Background parallax effect
window.addEventListener("scroll", function () {
  const whySection = document.querySelector(".why-section");
  const scrollY = window.scrollY;
  const offsetTop = whySection.offsetTop;
  const height = whySection.offsetHeight;
  if (scrollY + window.innerHeight >= offsetTop && scrollY <= offsetTop + height) {
    const relativeY = scrollY - offsetTop;
    whySection.style.backgroundPosition = `center ${relativeY * 0.3}px`;
  }
});

// Mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');

menuToggle.addEventListener('click', () => {
  navbar.classList.toggle('mobile-open');
  menuToggle.classList.toggle('close');
});

navbar.querySelectorAll('a:not(.dropbtn)').forEach(link =>
  link.addEventListener('click', () => {
    navbar.classList.remove('mobile-open');
    menuToggle.classList.remove('close');
  })
);

const testimonials = document.querySelectorAll('.testimonial-slide');
let current = 0;

function showNextTestimonial() {
  testimonials[current].classList.remove('active');
  current = (current + 1) % testimonials.length;
  testimonials[current].classList.add('active');
}

setInterval(showNextTestimonial, 9000);
