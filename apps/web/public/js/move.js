const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show-css");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden-css");
hiddenElements.forEach((element) => observer.observe(element));
