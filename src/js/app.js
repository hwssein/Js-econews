"use strict";

import addHeader from "./addHeader.js";
import addMain from "./addMain.js";

const init = async () => {
  await addHeader();

  await addMain();
};

document.addEventListener("DOMContentLoaded", init);
