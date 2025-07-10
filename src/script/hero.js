document.addEventListener("DOMContentLoaded", () => {
  const programWindow = document.querySelector(".hero__program-window");
  const laptop = document.querySelector(".hero__laptop");
  const cards = document.querySelectorAll(".hero__card");
  const folder = document.querySelector(".hero__folder");

  setTimeout(() => {
    const screenWidth = window.innerWidth;
    let currentSettings;
    const screenSettings = {
      mobile: {
        translateX: "100px",
        laptopValue: "24em",
        folderValue: "translateX(-60%) translateY(0px)"
      },
      tablet: {
        translateX: "240px",
        laptopValue: "24em",
        folderValue: "translateX(-30%) translateY(0px)"
      },
      desktop: {
        translateX: "326px",
        laptopValue: "19.3em",
        folderValue: "translateX(0%) translateY(0px)"
      }
    };

    if (screenWidth <= 801) {
      currentSettings = screenSettings.mobile;
    } else if (screenWidth <= 1240) {
      currentSettings = screenSettings.tablet;
    } else {
      currentSettings = screenSettings.desktop;
    }
  
    programWindow.style.transform = `translateX(${currentSettings.translateX})`;
    programWindow.style.opacity = `1`;

    setTimeout(() => {
      laptop.style.opacity = "1";
      laptop.style.top = currentSettings.laptopValue;

      cards.forEach((card, index) => {
        setTimeout(() => {
          card.style.opacity = "1";
          const angle = 10;
          const distance = 50;
          const translateX =
            distance * Math.cos(angle * (Math.PI / 180)) * (index + 1);
          const translateY =
            distance * Math.sin(angle * (Math.PI / 180)) * (index + 1);
          card.style.transform = `translate(${translateX}px, - ${translateY}px)`;
          card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
        }, index * 600);
      });

      setTimeout(() => {
        folder.style.transform = currentSettings.folderValue;
        folder.style.opacity = "1";
        folder.style.transition = "opacity 1s ease";
      }, 2000);
    }, 1500);
  }, 600);
});
