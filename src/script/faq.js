document.querySelectorAll(".faq__question").forEach((question, index) => {
  const answer = question.nextElementSibling;
  const faqItem = question.closest(".faq__item");

  if (index === 0) {
    answer.classList.add("active");
    question.classList.add("active");
    faqItem.classList.add("active");
  }

  question.addEventListener("click", () => {
    const isActive = answer.classList.contains("active");

    document.querySelectorAll(".faq__answer").forEach((ans) => {
      ans.classList.remove("active");
    });
    document.querySelectorAll(".faq__question").forEach((q) => {
      q.classList.remove("active");
    });
    document.querySelectorAll(".faq__item").forEach((item) => {
      item.classList.remove("active");
    });

    if (!isActive) {
      answer.classList.add("active");
      question.classList.add("active");
      faqItem.classList.add("active");
    }
  });
});
