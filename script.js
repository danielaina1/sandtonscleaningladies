document.addEventListener("click", function (e) {
  if (e.target.tagName === "A" && e.target.getAttribute("href").startsWith("#")) {
    e.preventDefault();
    const targetId = e.target.getAttribute("href").substring(1);
    const target = document.getElementById(targetId);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: "smooth",
      });
    }
  }
});
