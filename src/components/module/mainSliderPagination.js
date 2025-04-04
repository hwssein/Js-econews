const mainSliderPagination = (sliderInstance) => {
  const paginationContainer = document.querySelector(
    ".main-slider__pagination-container"
  );

  const sliders = [
    "اقتصاد",
    "سیاست",
    "فرهنگ",
    "فناوری",
    "جامعه",
    "ورزش",
    "سلامت",
    "استان‌ها",
  ];

  sliders.forEach((item, index) => {
    const jsxData = `
        <li class="main-slider__pagination-item" data-id="${index + 1}">
          <span class="main-slider__pagination-item-btn"></span>
          <span class="main-slider__pagination-item-name">${item}</span>
        </li>
    `;
    paginationContainer.innerHTML += jsxData;
  });

  const paginationButtons = document.querySelectorAll(
    ".main-slider__pagination-item"
  );

  paginationButtons.forEach((item, index) =>
    item.addEventListener("click", () => sliderInstance.go(index))
  );

  if (paginationButtons.length) {
    paginationButtons[0].classList.add("main-slider__pagination-item--active");
  }

  sliderInstance.on("move", (sliderIndex) => {
    paginationButtons.forEach((item) =>
      item.classList.remove("main-slider__pagination-item--active")
    );
    paginationButtons[sliderIndex].classList.add(
      "main-slider__pagination-item--active"
    );
  });
};

export default mainSliderPagination;
