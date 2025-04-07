const highlightsImageCard = (data) => {
  const jsxData = `
        <div class="highlights__item-image">
          <div class="highlights__item-image-container">
            <img src="${data.url}" alt="category news image" />

            ${
              data.video
                ? `<span class="highlights__image-tooltip" style="--tooltip:var(${data.color})"><i class="fa-solid fa-play"></i></span>`
                : ""
            }

            
          </div>
  
          ${
            data.title
              ? `<h3 class="highlights__item-image-title">${data.title}</h3>`
              : ""
          }
  
          <h2 class="highlights__item-image-description">
            ${data.description}
          </h2>
        </div>
    `;

  return jsxData;
};

export default highlightsImageCard;
