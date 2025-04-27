const form = document.querySelector('.contact-form');
const loader = document.getElementById('form-loader');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const name = form.querySelector('input[name="name"]').value.trim();
  const email = form.querySelector('input[name="email"]').value.trim();
  const message = form.querySelector('textarea[name="message"]').value.trim();

  if (name === '' || email === '' || message === '') {
    form.classList.add('shake');
    setTimeout(() => {
      form.classList.remove('shake');
    }, 500);
  } else {
    loader.style.display = 'block';

    setTimeout(() => {
      form.submit();
      alert('✅ Ton message a bien été envoyé ! Merci pour ton contact !');
    }, 2000);
  }
});

// Gestion du changement de thème
const toggleButton = document.getElementById('theme-toggle');

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  // Changer le texte du bouton
  if (document.body.classList.contains('dark-mode')) {
    toggleButton.textContent = '☀️ Mode clair';
  } else {
    toggleButton.textContent = '🌙 Mode sombre';
  }
});

