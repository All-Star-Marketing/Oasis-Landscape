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
  
  // Disable/enable scroll
  if (navbar.classList.contains('mobile-open')) {
    document.body.classList.add('noscroll');
  } else {
    document.body.classList.remove('noscroll');
  }
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

const header = document.querySelector("header");
const hero = document.querySelector(".hero");

if (header && hero) {
  const offset = header.offsetHeight + 20;
  hero.style.paddingTop = `${offset}px`;
}

const navLinks = document.querySelectorAll('nav a:not(.logo a)');

navLinks.forEach(link => {
  link.addEventListener('click', function () {
    navLinks.forEach(l => l.classList.remove('active'));
    this.classList.add('active');
  });
});

const serviceToggle = document.querySelector('.mobile-dropdown-toggle');
const serviceMenu = document.querySelector('.mobile-dropdown-menu');

if (serviceToggle && serviceMenu) {
  serviceToggle.addEventListener('click', () => {
    serviceMenu.style.display = serviceMenu.style.display === 'flex' ? 'none' : 'flex';
  });
}

const mobileDropdown = document.querySelector('.mobile-dropdown-toggle');
const dropdownMenu = document.querySelector('.mobile-dropdown-menu');
mobileDropdown?.addEventListener('click', (e) => {
  e.preventDefault();
  dropdownMenu.style.display = dropdownMenu.style.display === 'flex' ? 'none' : 'flex';
});

document.querySelectorAll('.submenu-toggle').forEach(toggle => {
  const subnav = toggle.nextElementSibling;
  toggle.addEventListener('click', (e) => {
    e.preventDefault();
    subnav.style.display = subnav.style.display === 'flex' ? 'none' : 'flex';
  });
});

// Toggle ALL mobile service dropdowns
document.querySelectorAll('.mobile-dropdown-toggle').forEach(toggle => {
  const menu = toggle.nextElementSibling;
  toggle.addEventListener('click', (e) => {
    e.preventDefault();
    const isVisible = menu.style.display === 'flex';
    menu.style.display = isVisible ? 'none' : 'flex';
  });
});

// Toggle ALL mobile submenus inside services
document.querySelectorAll('.submenu-toggle').forEach(toggle => {
  const subnav = toggle.nextElementSibling;
  toggle.addEventListener('click', (e) => {
    e.preventDefault();
    const isVisible = subnav.style.display === 'flex';
    subnav.style.display = isVisible ? 'none' : 'flex';
  });
});

document.querySelectorAll('.mobile-dropdown-toggle').forEach(toggle => {
  const menu = toggle.nextElementSibling;
  toggle.addEventListener('click', (e) => {
    e.preventDefault(); // prevent jumping
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
  });
});

document.querySelectorAll('.submenu-toggle').forEach(toggle => {
  const subnav = toggle.nextElementSibling;
  toggle.addEventListener('click', (e) => {
    e.preventDefault();
    subnav.style.display = subnav.style.display === 'flex' ? 'none' : 'flex';
  });
});

