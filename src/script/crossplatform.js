const scrollContainer = document.querySelector(
  ".crossplatform__formats-scroll");
  const zipLogoContainer = document.querySelector(
  ".crossplatform__format-logo-zip-container");
  const logos = document.querySelectorAll(".crossplatform__format-logo.zip");
  
  function changeFont() {
    [...logos].map((item) => {
      if (item.firstChild.textContent.split('').length > 4) {
        item.firstChild.style.fontSize = '14px';
      }
    })
  }

  let currentIndex = 0;
  const visibleCount = 7;
  let startX;
  let isDragging = false;
  let animationInterval;
  
  function updateScroll() {
  const offset = -currentIndex * (90 / logos.length);
  zipLogoContainer.style.transform = `translateX(${offset}%)`;
  }
  
  scrollContainer.addEventListener("mousedown", (e) => {
  isDragging = true;
  startX = e.pageX;
  scrollContainer.style.cursor = "grabbing";
  clearInterval(animationInterval);
  });
  
  scrollContainer.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  
  const deltaX = e.pageX - startX;
  const step = logos[0].offsetWidth;
  const newIndex =
  currentIndex + Math.round(deltaX / step);
  
  if (newIndex >= 0 && newIndex < logos.length - visibleCount + 1) {
  zipLogoContainer.classList.add("animate");
  currentIndex = newIndex;
  updateScroll();
  }
  
  startX = e.pageX;
  });
  
  scrollContainer.addEventListener("mouseup", () => {
  isDragging = false;
  scrollContainer.style.cursor = "grab";
  animationInterval = setInterval(() => {
  currentIndex = (currentIndex + 1) % logos.length;
  updateScroll();
  }, 1000);
  });
  
  scrollContainer.addEventListener("mouseleave", () => {
  isDragging = false;
  });
  
  animationInterval = setInterval(() => {
  currentIndex = (currentIndex + 1) % logos.length;
  updateScroll();
  }, 1000);
  changeFont()