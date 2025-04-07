import getHtmlUrl from "../utils/getHtmlUrl.js";
import errorAlert from "../utils/errorAlert.js";

import mainSliderSlides from "../components/module/mainSliderSlides.js";
import mainSliderData from "../constant/mainSliderData.js";
import mainSliderHandler, {
  mainSliderConfig,
} from "../config/mainSliderHandler.js";
import mainSliderPagination from "../components/module/mainSliderPagination.js";

import card from "../components/module/card.js";
import partialCardData from "../constant/partialCardDate.js";

import tooltipConfig from "../config/tooltipConfig.js";

import highlightsCard from "../components/module/highlightsCard.js";
import highlightsData from "../constant/highlightsData.js";

const addMain = async () => {
  const mainEl = document.getElementById("main");

  try {
    const [mainSliderElement, partialElement, highlightsElement] =
      await Promise.all([
        getHtmlUrl("src/components/template/mainSlider.html"),
        getHtmlUrl("src/components/template/partial.html"),
        getHtmlUrl("src/components/template/highlights.html"),
      ]);

    mainEl.innerHTML = "";
    mainEl.insertAdjacentHTML(
      "afterbegin",
      mainSliderElement + partialElement + highlightsElement
    );

    mainSliderSlides(mainSliderData);
    mainSliderHandler(true);
    mainSliderPagination(mainSliderConfig);

    card(partialCardData, ".partial__cards-wrapper");

    tooltipConfig();

    highlightsCard(highlightsData);
  } catch (error) {
    console.log(error);

    errorAlert("متاسفانه مشکلی رخ داده است. لطفا دوباره تلاش کنید.");
  }
};

export default addMain;
