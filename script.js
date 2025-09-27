
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
