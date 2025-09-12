document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");
  const nextBtn = document.getElementById("next");
  const prevBtn = document.getElementById("prev");
  const paginationContainer = document.getElementById("pagination");
  const themeToggle = document.getElementById("theme-toggle");
  let currentSlide = 0;

  if (slides.length === 0) return;

  slides.forEach((_, i) => {
    const dot = document.createElement("button");
    dot.classList.add("pagination-dot");
    dot.addEventListener("click", () => showSlide(i));
    paginationContainer.appendChild(dot);
  });

  const paginationDots =
    paginationContainer.querySelectorAll(".pagination-dot");

  function showSlide(n) {
    slides[currentSlide].classList.remove("active");
    paginationDots[currentSlide].classList.remove("active");

    if (n >= slides.length) {
      currentSlide = 0;
    } else if (n < 0) {
      currentSlide = slides.length - 1;
    } else {
      currentSlide = n;
    }

    slides[currentSlide].classList.add("active");
    paginationDots[currentSlide].classList.add("active");
  }

  nextBtn.addEventListener("click", () => showSlide(currentSlide + 1));
  prevBtn.addEventListener("click", () => showSlide(currentSlide - 1));

  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight" || e.key === " " || e.key === "j") {
      e.preventDefault();
      showSlide(currentSlide + 1);
    } else if (e.key === "ArrowLeft" || e.key === "k") {
      e.preventDefault();
      showSlide(currentSlide - 1);
    }
  });

  showSlide(0);

  themeToggle.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    if (currentTheme === "dark") {
      document.documentElement.setAttribute("data-theme", "light");
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
    }
  });

  // Set initial theme
  document.documentElement.setAttribute("data-theme", "light");
});
