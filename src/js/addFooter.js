import errorAlert from "../utils/errorAlert.js";

import footerSocial from "../components/module/footerSocial.js";
import footerSocialData from "../constant/footerSocialData.js";
import getHtmlUrl from "../utils/getHtmlUrl.js";

const addFooter = async () => {
  const footerEl = document.getElementById("footer");

  try {
    const footerElements = await getHtmlUrl(
      "src/components/layout/footer/footer.html"
    );

    footerEl.insertAdjacentHTML("afterbegin", footerElements);

    footerSocial(footerSocialData);
  } catch (error) {
    console.log(error);

    errorAlert("متاسفانه مشکلی رخ داده است. لطفا دوباره تلاش کنید.");
  }
};

export default addFooter;
