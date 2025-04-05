import categoryNews from "./categoryNews.js";

const highlightsCard = (data) => {
  const highlightsCardContainer = document.querySelector(".highlights");

  highlightsCardContainer.innerHTML = "";

  data.forEach((item) => {
    const jsxData = `
      <div class="highlights__item" style="--custom-color:var(${item.color})">

        <div class="highlights__item-header">
          <div class="highlights__item-header-title">
            <span><i class="fa-solid fa-bars"></i> ${item.title}</span>
            <i class="fa-solid fa-angle-left"></i>
          </div>

          <div class="highlights__item-header-config">
            <span><i class="fa-solid fa-rss"></i></span>
            <span><i class="fa-solid fa-gear"></i></span>
          </div>

          <div class="highlights__item-header-headline">
            <ul>
              ${item.headline
                .map((headline) => `<li>${headline}</li>`)
                .join("")}
            </ul>
          </div>
        </div>

        <div class="highlights__item-content-container">

          <div class="highlights__item-image">
            <div class="highlights__item-image-container">
              <img src="${item.image.url}" alt="${item.title} image" />
            </div>
            <p class="highlights__item-image-content">
              ${item.image.description}
            </p>
          </div>

          <div class="highlights__item-card"></div>

          <div id="highlights-item-category-news" class="highlights__item-category-news"></div>

          <div class="highlights__item-ads">
            <div class="highlights__item-image-container">
              <img src="${item.ads.url}" alt="${item.title} image" />
            </div>

            ${
              item.ads.description
                ? `<p class="highlights__item-image-content">
                     ${item.ads.description}
                   </p>`
                : ""
            }
          </div>

        </div>
      </div>
    `;

    highlightsCardContainer.innerHTML += jsxData;

    categoryNews(item.categoryNews, "#highlights-item-category-news");
  });
};

export default highlightsCard;
