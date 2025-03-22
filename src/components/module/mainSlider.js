const mainSliderContainer = document.querySelector(
  "#main-slider .splide__track .splide__list"
);

const mainSliderHandler = (data) => {
  mainSliderContainer.innerHTML = "";

  data.forEach((item) => {
    const jsxData = `
    <li class="splide__slide main__splide--container">

     <div class="main__slider--right">

      <div class="main__slider--headline-news" dir="rtl">
        <span class="d-none d-md-block" style="color:var(--chart-${
          item.id
        }); min-width:75px; text-align:center">سرخط اخبار:</span>

        <section class="splide" aria-label="Splide Basic HTML Example" id="main-headline-slider">
          <div class="splide__track">
		        <ul class="splide__list">
              ${item.headlineNews
                .map(
                  (headline) =>
                    `    <li class="splide__slide headline-slider">${headline}</li>`
                )
                .join("")}
		        </ul>
          </div>
        </section>
      </div>

     <div class="main__slider--image">
        <img src="${item.image}" alt="economy image" />

        <span class="image-tooltip" style="background-color:var(--chart-${
          item.id
        })">${item.subject}</span>

        <span class="image-overlay">${item.imageTitle}</span>
     </div>

     <div class="main__slider--cards">
        ${item.cards
          .map(
            (card) => `
            <div class="main__slider--card">
              <div class="main__slide--card-image">
                <img src="${card.cardsImage}" />
              </div>

              <div class="main__slider--card-content">
                <span>${card?.cardsTitle}</span>
                <span>${card.cardsDescription}</span>
              </div>
            </div>
          `
          )
          .join("")}
     </div>
    </div>


    <div class="main__slider--left">
     
        <div class="main__slider--latest-news">
          <div class="main__slider--latest-top" style="border-bottom: 3px solid var(--chart-${
            item.id
          });">
              <i class="fa-solid fa-bookmark fa-sm" style="color:var(--secondary)"></i>
              <span>تازه‌های</span>
              <span style="color:var(--chart-${item.id})">${item.subject}</span>
          </div>

          <ul class="main__slider--latest-bottom">
          ${item.latestNews
            .map(
              (news) => `
            <li><i class="fa-solid fa-circle fa-2xs" style="color:var(--chart-${item.id});"></i> ${news}</li>
            `
            )
            .join("")}
          
          </ul>
        </div>

        <div class="main__slide--ads-container">
          <div class="main__slide--ads">
            <div class="main__slider--ads-number">
              <span><i class="fa-solid fa-table-columns"></i> تبلیغات در سایت:</span>
              <span>۸۸۹۳۰۲۷۰</span>
            </div>

            <div class="main__slider--ads-image">
              <img src="${item.adsImage}" />
            </div>
          </div>

          <div class="main__slider--topics">
            <div class="main__slider--topics-top">
            <span>
             <i class="fa-solid fa-fire"></i> موضوعات داغ
            </span>
            </div>

            <ul class="main__slider--topics-content">
            ${item.hotTopics
              .map(
                (item) => `
              <li>${item}</li> <li>|</li>
              `
              )
              .join("")}
            </ul>

            <div>
            
            
            </div>
          
          </div>
     
        </div>     
     
    </div>
       
    </li>
    `;

    mainSliderContainer.innerHTML += jsxData;
  });

  setTimeout(() => {
    const headlineSlider = document.getElementById("main-headline-slider");

    if (headlineSlider)
      new Splide(headlineSlider, {
        type: "loop",
        direction: "ttb",
        height: "2rem",
        autoplay: true,
        pagination: false,
        arrows: false,
      }).mount();
  }, 150);
};

export default mainSliderHandler;
