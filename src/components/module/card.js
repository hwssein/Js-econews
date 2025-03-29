const partialCardsContainer = document.querySelector(
  ".partial__cards--wrapper"
);

const card = (data) => {
  partialCardsContainer.innerHTML = "";

  data.forEach((item) => {
    const jsxData = `
        <div class="cards">
            <div class="cards__title--container">
                <span>
                    <i class="${item.icon}"></i>
                    <span>${item.title}</span>
                </span>

                <span>اطلاعات بیشتر</span>
            </div>

            <div class="cards__content--container" style="--custom-color: var(${
              item.color
            });">
                <div class="cards__content--image">
                    <img src=${item.image} alt=${item.headline} />
                </div>

                <div class="cards__content--text">
                    <span>${item.headline ? item.headline : ""}</span>
                    <span>${item.description}</span>
                </div>
            </div>
        </div>

    `;
    partialCardsContainer.innerHTML += jsxData;
  });

  console.log(data[0].image);
};

export default card;
