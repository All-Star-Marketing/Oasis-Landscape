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

// Form validation + success message
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");
  const phone = document.getElementById("phone");
  const formMessage = document.getElementById("form-message");

  if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
    formMessage.textContent = "Please fill out all required fields.";
    formMessage.style.color = "red";
    formMessage.style.display = "block";
    return;
  }

  formMessage.textContent = "Thank you! We'll be in touch shortly.";
  formMessage.style.color = "var(--oasis-green)";
  formMessage.style.display = "block";
  this.reset();
});
