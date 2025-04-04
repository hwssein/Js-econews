import card from "./card.js";
import categoryNews from "./categoryNews.js";

const mainSliderSlides = (data) => {
  const mainSliderContainer = document.querySelector(
    "#main-slider .splide__track .splide__list"
  );

  mainSliderContainer.innerHTML = "";

  data.forEach((item) => {
    const jsxData = `
    <li class="splide__slide main-slider__slide">
      <div class="main-slider__right">
        <div class="main-slider__vertical-slider-container">
          <span class="main-slider__vertical-slider-text" style="--custom-color:var(--chart-${
            item.id
          })">
            سرخط اخبار:
          </span>

          <div class="swiper main-slider__vertical-slider-wrapper">
            <div class="swiper-wrapper">
              ${item.headlineNews
                .map(
                  (headline) => `
                <span class="swiper-slide main-slider__vertical-slider-content">
                  ${headline}
                </span>
              `
                )
                .join("")}
            </div>
          </div>
        </div>

        <div class="main-slider__image">
          <div>
            <img src="${item.image}" alt="economy image" />
            <span class="image-overlay">${item.imageTitle}</span>
          </div>

          <span class="image-tooltip" style="--custom-color:var(--chart-${
            item.id
          })">
            ${item.subject}
          </span>
        </div>

        <div id="main-slider-cards-${item.id}" class="main-slider__cards"></div>
      </div>

      <div class="main-slider__left">
        <div id="main-slider-category-news-${
          item.id
        }" class="main-slider__category-news"></div>

        <div class="main-slider__ads-container">
          <div class="main-slider__ads">
            <div class="main-slider__ads-number">
              <span><i class="fa-solid fa-table-columns"></i> تبلیغات در سایت:</span>
              <span>۸۸۹۳۰۲۷۰</span>
            </div>

            <div class="main-slider__ads-image">
              <img src="${item.adsImage}" />
            </div>
          </div>

          <div class="main-slider__topics">
            <div class="main-slider__topics-title">
                <i class="fa-solid fa-fire"></i>
                <span>موضوعات داغ</span>
            </div>

            <ul class="main-slider__topics-content">
              ${item.hotTopics
                .map(
                  (topic) => `
              <li>${topic}</li> <li>|</li>
              `
                )
                .join("")}
            </ul>
          </div>
        </div>
      </div>
    </li>
    `;

    mainSliderContainer.innerHTML += jsxData;

    card(item.cards, `#main-slider-cards-${item.id}`);
    categoryNews(item.categoryNews, `#main-slider-category-news-${item.id}`);
  });

  setTimeout(() => {
    new Swiper(".main-slider__vertical-slider-wrapper", {
      direction: "vertical",
      loop: true,
      autoplay: true,
      slidesPerView: 1,
      spaceBetween: 10,
      mousewheel: false,
    });
  }, 150);
};

export default mainSliderSlides;
