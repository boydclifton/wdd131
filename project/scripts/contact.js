const form = document.getElementById('contactForm');
const response = document.getElementById('formResponse');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const topic = document.getElementById('topic').value;
  const message = document.getElementById('message').value.trim();


  if (!name || !email || !message) {
    response.textContent = 'Please fill in all required fields.';
    response.style.color = 'red';
    return;
  }
  if (!/\S+@\S+\.\S+/.test(email)) {
    response.textContent = 'Please enter a valid email address.';
    response.style.color = 'red';
    return;
  }

  const entry = { name, email, topic, message, date: new Date().toLocaleString() };
  const stored = JSON.parse(localStorage.getItem('psxMessages') || '[]');
  stored.push(entry);
  localStorage.setItem('psxMessages', JSON.stringify(stored));


  response.textContent = `Thank you, ${name}! Your message was saved.`;
  response.style.color = 'green';
  form.reset();

  const count = Number(localStorage.getItem('feedbackCount') || 0) + 1;
  localStorage.setItem('feedbackCount', count);
});