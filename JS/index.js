const form = document.querySelector(".contact-form");
const loader = document.getElementById("form-loader");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = form.querySelector('input[name="name"]').value.trim();
  const email = form.querySelector('input[name="email"]').value.trim();
  const message = form.querySelector('textarea[name="message"]').value.trim();

  if (name === "" || email === "" || message === "") {
    form.classList.add("shake");
    setTimeout(() => {
      form.classList.remove("shake");
    }, 500);
  } else {
    loader.style.display = "block";

    setTimeout(() => {
      form.submit();
      alert("✅ Ton message a bien été envoyé ! Merci pour ton contact !");
    }, 2000);
  }
});

// ! Gestion du changement de thème
const toggleButton = document.getElementById("theme-toggle");

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
  toggleButton.textContent = "☀️ Mode clair";
}

toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    toggleButton.textContent = "☀️ Mode clair";
    localStorage.setItem("theme", "dark");
  } else {
    toggleButton.textContent = "🌙 Mode sombre";
    localStorage.setItem("theme", "light");
  }
});

// ?Scroll doux vers les ancres
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});

// ?Bouton pour remonter en haut
const backToTopButton = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
});

backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

//*=== Animation de transition entre les pages ===
document.querySelectorAll("a").forEach(link => {
  const href = link.getAttribute("href");
  if (href && !href.startsWith("#") && !href.startsWith("mailto:") && !link.hasAttribute("target")) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      document.body.classList.add("fade-out");
      setTimeout(() => {
        window.location.href = href;
      }, 300);
    });
  }
});

window.addEventListener("pageshow", () => {
  document.body.classList.remove("fade-out");
});

// *=== Loader au démarrage de la page ===
window.addEventListener("load", () => {
  const loader = document.getElementById("page-loader");
  loader.classList.add("fade-out");

  // *Retire complètement du DOM après transition
  setTimeout(() => {
    loader.style.display = "none";
  }, 500);
});

