const errorAlert = (message) => {
  const errorContainer = document.createElement("div");
  const errorContent = document.createElement("p");

  const bodyEl = document.querySelector("body");
  bodyEl.innerHTML = "";

  errorContent.textContent = message;

  errorContainer.classList.add("error-alert-container");
  errorContent.classList.add("error-alert-content");

  errorContainer.appendChild(errorContent);
  document.body.appendChild(errorContainer);
};

export default errorAlert;
