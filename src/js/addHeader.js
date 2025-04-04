import errorAlert from "../utils/errorAlert.js";
import getHtmlUrl from "../utils/getHtmlUrl.js";

import headerBottomScrollHandler from "../utils/headerBottomScrollHandler.js";

const addHeader = async () => {
  const headerEL = document.getElementById("header");

  try {
    const [headerTopElement, headerMiddleElement, HeaderBottomElement] =
      await Promise.all([
        getHtmlUrl("src/components/layout/header/header-top.html"),
        getHtmlUrl("src/components/layout/header/header-middle.html"),
        getHtmlUrl("src/components/layout/header/header-bottom.html"),
      ]);

    headerEL.innerHTML = "";
    headerEL.insertAdjacentHTML(
      "afterbegin",
      headerTopElement + headerMiddleElement + HeaderBottomElement
    );

    const headerBottomRightArrow = document.getElementById(
      "header-bottom-right-icon"
    );
    const headerBottomLeftArrow = document.getElementById(
      "header-bottom-left-icon"
    );

    headerBottomRightArrow.addEventListener("click", () =>
      headerBottomScrollHandler("left")
    );
    headerBottomLeftArrow.addEventListener("click", () =>
      headerBottomScrollHandler("right")
    );
  } catch (error) {
    console.log(error);

    errorAlert("متاسفانه مشکلی رخ داده است. لطفا دوباره تلاش کنید.");
  }
};

export default addHeader;
