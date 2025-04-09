import card from "./card.js";
import categoryNews from "./categoryNews.js";
import highlightsImageCard from "./highlightsImageCard.js";

const highlightsItemCard = (data) => {
  const highlightsItemCardContainer =
    document.querySelector(".highlights__item");
  highlightsItemCardContainer.innerHTML = "";

  data.forEach((item) => {
    const jsxData = `
      <div class="highlights__item-container" style="--custom-color:var(${
        item.color
      })">
        <div class="highlights__header">

          <div class="highlights__header-title order-1 order-md-1">
            <span>${
              item.categoryNews.video
                ? `<i class="fa-solid fa-video-camera"></i>`
                : `<i class="fa-solid fa-bars"></i>`
            } ${item.title}</span>
            <i class="fa-solid fa-angle-left"></i>
          </div>

          <div class="highlights__header-config order-2 order-md-3">
            <div class="highlights__header-config-content">
              <span><i class="fa-solid fa-rss"></i></span>
              <span class="highlights__gear"><i class="fa-solid fa-gear"></i></span>
            </div>

            <div class="highlights__header-config-option">
              <ul>
                <li>
                  <i class="fa-solid fa-xmark"></i>
                  <span>مخفی کردن شاخه</span>
                </li>
                <li>
                  <i class="fa-solid fa-angle-up"></i>
                  <span>انتقال کادر به بالا</span>
                </li>
                <li>
                  <i class="fa-solid fa-angle-down"></i>
                  <span>انتقال کادر به پایین</span>
                </li>
                <li>
                  <i class="fa-solid fa-plus"></i>
                  <span>افزودن کادر جدید</span>
                </li>
              </ul>
            </div>
          </div>

          <div class="highlights__header-headline order-3 order-md-2">
            <ul>
              ${item.headline
                .map((headline) => `<li>${headline}</li>`)
                .join("")}
            </ul>
          </div>
        </div>

        <div class="highlights__item-content-container">
        ${highlightsImageCard(item.image)}

          <div class="highlights__item-card-container">
            <div id="highlights__item-card-${
              item.id
            }" class="highlights__item-card"></div>
          </div>

 
          <div class="highlights__item-category-news-container">
            <div id="highlights-item-category-news-${
              item.id
            }" class="highlights__item-category-news"></div>
          </div>


          ${
            item.ads.description
              ? highlightsImageCard(item.ads)
              : `
                <div class="highlights__item-ads">
                  <img src="${item.ads.url}" alt="${item.title} image" />
                </div>
              `
          }
        </div>
      </div>
    `;

    highlightsItemCardContainer.innerHTML += jsxData;

    card(item.cards, `#highlights__item-card-${item.id}`);
    categoryNews(
      item.categoryNews,
      `#highlights-item-category-news-${item.id}`
    );
  });

  const gearIcon = document.querySelectorAll(".highlights__gear");
  gearIcon.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.stopPropagation();

      const cardElement = item.closest(".highlights__header");
      const configOptionContainer = cardElement.querySelector(
        ".highlights__header-config-option"
      );
      configOptionContainer.style.display = "flex";
    });
  });

  document.addEventListener("click", (e) => {
    const allConfigOptions = document.querySelectorAll(
      ".highlights__header-config-option"
    );

    allConfigOptions.forEach((configOption) => {
      if (!configOption.contains(e.target)) {
        configOption.style.display = "none";
      }
    });
  });
};

export default highlightsItemCard;
