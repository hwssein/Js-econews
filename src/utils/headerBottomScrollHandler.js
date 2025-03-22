const headerBottomSliderContainer = document.getElementById(
  "header-bottom-slider-container"
);

const headerBottomScrollHandler = (direction) => {
  headerBottomSliderContainer.scrollBy({
    top: 0,
    left: direction === "right" ? -100 : 100,
    behavior: "smooth",
  });
};

export default headerBottomScrollHandler;
