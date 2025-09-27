// Initialize AOS for scroll animations
AOS.init({
  duration: 1000, // values from 0 to 3000, with step 50ms
  once: true, // whether animation should happen only once - while scrolling down
});

// Initialize Typed.js for the typing effect
const options = {
  strings: ['Software Engineer', 'C# Developer', 'Azure Specialist', 'Microservices Architect'],
  typeSpeed: 50,
  backSpeed: 50,
  loop: true
};

const typed = new Typed('#typed-text', options);

// Contact form submission handler
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (name && email && message) {
    document.getElementById('formMessage').textContent = `Thank you, ${name}. Your message has been sent.`;
    document.getElementById('contactForm').reset();
  } else {
    document.getElementById('formMessage').textContent = 'Please fill out all fields.';
  }
});
