// script.js

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  if (form) {
    form.addEventListener("submit", function (e) {
      alert("Thank you! Your message has been sent.");
    });
  }

  // Smooth scrolling for nav links (if not handled by CSS)
  const navLinks = document.querySelectorAll("nav a[href^='#']");
  navLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});