const card = (data, path) => {
  const pathElement = document.querySelector(path);
  pathElement.innerHTML = "";

  data.forEach((item) => {
    const jsxData = `
        <div class="cards">
          ${
            item.title &&
            `<div class="cards__title-container">
              <span>
                <i class="${item.icon}"></i>
                <span>${item.title}</span>
                </span>

                <span>اطلاعات بیشتر</span>
             </div>`
          }

            <div class="cards__content-container" style="${
              item.title
                ? `--custom-color: var(${item.color})`
                : "border-top: none"
            }">
             
                <div class="cards__content-image">
                    <img src=${item.image} alt=${item.headline} />

                    ${
                      item.video
                        ? `<span class="cards-tooltip" style="--tooltip:var(${item.color})"><i class="fa-solid fa-play"></i></span>`
                        : ""
                    }
                </div>

                <div class="cards__content-text">
                    <span>${item.headline ? item.headline : ""}</span>
                    <span>${item.description}</span>
                </div>
            </div>
        </div>

    `;
    pathElement.innerHTML += jsxData;
  });
};

export default card;
