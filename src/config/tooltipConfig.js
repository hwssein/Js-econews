const tooltipConfig = () => {
  const tooltipChart = document.querySelectorAll(
    '[data-bs-toggle="tooltip-chart"]'
  );
  const tooltipPrice = document.querySelectorAll(
    '[data-bs-toggle="tooltip-price"]'
  );

  const tooltipChartEl = [...tooltipChart].map((tooltipChartTriggerEl) => {
    new bootstrap.Tooltip(tooltipChartTriggerEl, {
      customClass: "tooltip__chart-custom",
    });

    tooltipPrice.forEach((item) => {
      const asset = item.getAttribute("data-asset");
      const time1 = item.getAttribute("data-time1");
      const time2 = item.getAttribute("data-time2");
      const time3 = item.getAttribute("data-time3");

      new bootstrap.Tooltip(item, {
        customClass: "tooltip__price-custom",
        html: true,
        title: `
              <span>${asset}</span>
              <ul class="tooltip-list">
                <li>
                  <span>${time1}</span>
                  <span>6 ساعت پیش</span>
                </li>
                <li>
                  <span>${time2}</span>
                  <span>8 ساعت پیش</span>
                </li>
                <li>
                  <span>${time3}</span>
                  <span>10 ساعت پیش</span>
                </li>
              </ul>
            `,
      });
    });
  });
};

export default tooltipConfig;
