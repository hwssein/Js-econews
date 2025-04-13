let mainSliderConfig = null;

const mainSliderHandler = (status) => {
  if (status !== true) return;

  mainSliderConfig = new Splide("#main-slider", {
    autoplay: true,
    direction: "rtl",
    pagination: false,
    type: "loop",
    arrows: true,
    gap: "16px",

    breakpoints: {
      1400: {
        arrows: false,
      },
    },
  });

  mainSliderConfig.mount();
};

export default mainSliderHandler;
export { mainSliderConfig };
