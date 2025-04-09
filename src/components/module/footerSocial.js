const footerSocial = (data) => {
  const socialContainer = document.querySelector(".footer__middle-social");

  socialContainer.innerHTML = "";

  const jsxData = `
    <ul>
    ${data
      .map(
        (item) =>
          `
        <li style="--custom-color:var(${item.color})">
            <span><i class="${item.icon}"></i></span>
        </li>
        `
      )
      .join("")}
    </ul>
  `;

  socialContainer.innerHTML += jsxData;
};

export default footerSocial;
