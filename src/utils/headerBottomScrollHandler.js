const headerBottomScrollHandler = (direction) => {
  const headerBottomSliderContainer = document.getElementById(
    "header-bottom-slider-container"
  );

  headerBottomSliderContainer.scrollBy({
    top: 0,
    left: direction === "right" ? -170 : 170,
    behavior: "smooth",
  });
};

export default headerBottomScrollHandler;
