const categoryNews = (data, path) => {
  const pathElement = document.querySelector(path);

  pathElement.innerHTML = "";

  const jsxData = `
                  <div class="category-news">
                    ${
                      data.title
                        ? `
                        <div class="category-news__title-container">
                            <span><i class="fa-solid fa-bookmark fa-sm"></i></span>
                            <span>تازه‌های</span>
                            <span style="--custom-color:var(--chart-${data.id})">${data.title}</span>
                        </div>
                        `
                        : ""
                    }

                    <ul class="category-news__content-container" style="${
                      data.title
                        ? `--custom-color: var(--chart-${data.id});`
                        : "border-top: none"
                    }">
                      ${data.content
                        .map(
                          (news) =>
                            `
                        <li>
                          ${
                            data.video
                              ? `<i class="fa-solid fa-play 2xs"></i>`
                              : `<i class="fa-solid fa-circle fa-2xs"></i>`
                          }
                            <span>${news}</span>
                        </li>
                        `
                        )
                        .join("")}
                    </ul>
                  
                  </div>

                  `;

  pathElement.innerHTML += jsxData;
};

export default categoryNews;
