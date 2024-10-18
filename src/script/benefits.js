const features = [
  {
    text: "Программа основана на открытом исходном коде, что позволяет пользователям убедиться<br> в её надёжности и безопасности.",
    image: "./assets/images/benefits/8.png",
  },
  {
    text: "7–Zip обеспечивает более высокую степень сжатия файлов по сравнению с другими архиваторами, особенно в форматах 7z и zip.",
    image: "./assets/images/benefits/12.png",
  },
  {
    text: "Можно защитить свои архивы паролем с использованием алгоритма шифрования AES-256, что обеспечивает надёжную защиту данных.",
    image: "./assets/images/benefits/9.png",
  },
  {
    text: "7–Zip может использовать несколько ядер процессора для ускорения процесса архивирования и распаковки файлов.",
    image: "./assets/images/benefits/11.png",
  },
  {
    text: "Проверка целостности файлов в архиве позволяет убедиться в отсутствии ошибок или запустить восстановление повреждённых данных.",
    image: "./assets/images/benefits/10.png",
  },
  {
    text: "7–Zip имеет поддержку многих языков, в том числе понятный и удобный интерфейс на русском, что облегчает работу с программой.",
    image: "./assets/images/benefits/7.png",
  },
];

let currentFeature = 0;

const description = document.getElementById("description");
const descriptionImage = document.getElementById("description-image");

function updateFeature() {
  const featureItems = document.querySelectorAll(".features__item");

  featureItems.forEach((item, index) => {
    item.classList.remove("active");
    const children = item.children;

    if (children.length > 0) {
      children[0].classList.remove("loader");
    }

    if (index === currentFeature && children.length > 0) {
      children[0].classList.add("loader");
      item.classList.add("active");
    }
  });
  description.classList.add("fade-out");
  descriptionImage.classList.add("fade-out");

  setTimeout(() => {
    description.innerHTML = `<p class="description__text text-20-r">${features[currentFeature].text}</p>`;
    descriptionImage.src = features[currentFeature].image;

    description.classList.remove("fade-out");
    descriptionImage.classList.remove("fade-out");
  }, 500);

  currentFeature = (currentFeature + 1) % features.length;

  setTimeout(updateFeature, 3000);
}

updateFeature();
