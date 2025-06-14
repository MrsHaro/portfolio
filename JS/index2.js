// ===Gestion du theme depuis le localStorage ===
const toggleButton = document.getElementById("theme-toggle");
const prefersDark = localStorage.getItem("theme") === "dark";

// ?Appliquer le theme au chargement
if (prefersDark) {
  document.body.classList.add("dark-mode");
  toggleButton.textContent = "☀️ Mode clair";
}

// ?Changement de thème
toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  const isDark = document.body.classList.contains("dark-mode");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  toggleButton.textContent = isDark ? "☀️ Mode clair" : "🌙 Mode sombre";
});

//* === Scroll fluide sur les liens internes ===
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

//* === Bouton retour en haut ===
const backToTopBtn = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
  backToTopBtn.style.display = window.scrollY > 300 ? "flex" : "none";
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

//* ===transition entre les pages ===
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

window.addEventListener("load", () => {
  const loader = document.getElementById("page-loader");
  loader.classList.add("fade-out");

  setTimeout(() => {
    loader.style.display = "none";
  }, 500);
});