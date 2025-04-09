"use strict";

import addFooter from "./addFooter.js";
import addHeader from "./addHeader.js";
import addMain from "./addMain.js";

const init = async () => {
  await addHeader();

  await addMain();

  await addFooter();
};

document.addEventListener("DOMContentLoaded", init);
