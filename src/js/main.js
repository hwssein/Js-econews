"use strict";

import headerBottomScrollHandler from "../utils/headerBottomScrollHandler.js";

import mainSliderData from "../constant/mainSliderData.js";
import mainSliderHandler from "../components/module/mainSlider.js";
import { mainSliderConfig } from "../config/mainSliderConfig.js";
import mainSliderPagination from "../components/module/mainSliderPagination.js";

import card from "../components/module/card.js";
import partialCardData from "../constant/partialCardDate.js";

const headerBottomRightArrow = document.getElementById("header-bottom-right");
const headerBottomLeftArrow = document.getElementById("header-bottom-left");

const init = () => {
  mainSliderHandler(mainSliderData);
  mainSliderConfig.mount();

  mainSliderPagination(mainSliderConfig);

  card(partialCardData);
};

headerBottomRightArrow.addEventListener("click", () =>
  headerBottomScrollHandler("left")
);
headerBottomLeftArrow.addEventListener("click", () =>
  headerBottomScrollHandler("right")
);

document.addEventListener("DOMContentLoaded", init);
