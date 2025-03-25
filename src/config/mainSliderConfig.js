const mainSliderConfig = new Splide("#main-slider", {
  autoplay: true,
  direction: "rtl",
  pagination: false,
  type: "loop",

  breakpoints: {
    768: {
      arrows: false,
    },
  },
});

export { mainSliderConfig };
