const paginationContainer = document.querySelector(
  ".slider__pagination--container"
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

const mainSliderPagination = (sliderInstance) => {
  sliders.forEach((item, index) => {
    const jsxData = `
        <li class="slider__pagination--item" data-id=${index + 1}>
          <span class="slider__pagination--item-btn"></span>
          <span class="slider__pagination--item-name">${item}</span>
        </li>
    `;

    paginationContainer.innerHTML += jsxData;
  });

  const paginationButton = document.querySelectorAll(
    ".slider__pagination--item"
  );

  paginationButton.forEach((item, index) =>
    item.addEventListener("click", () => sliderInstance.go(index))
  );

  if (paginationButton.length) {
    paginationButton[0].classList.add("active-slide-btn");
  }

  sliderInstance.on("move", (sliderIndex) => {
    paginationButton.forEach((item) =>
      item.classList.remove("active-slide-btn")
    );
    paginationButton[sliderIndex].classList.add("active-slide-btn");
  });
};

export default mainSliderPagination;
