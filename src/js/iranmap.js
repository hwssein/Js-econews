document.addEventListener("DOMContentLoaded", function () {
  // تابع تنظیم اندازه نقشه
  function adjustMapSize() {
    const listElement = document.querySelector("#IranMap .list");
    const svgElement = document.querySelector("#IranMap svg");

    if (!listElement || !svgElement) return;

    const listHeight = listElement.offsetHeight;
    const listWidth = listElement.offsetWidth;
    const size = listHeight > listWidth ? listWidth : listHeight;

    svgElement.style.height = size + "px";
    svgElement.style.width = size + "px";
  }

  // فراخوانی تابع تنظیم اندازه و تغییر اندازه هنگام تغییر اندازه پنجره
  window.addEventListener("resize", adjustMapSize);
  adjustMapSize();

  // اضافه کردن رویداد hover روی هر path داخل g های SVG
  const svgPaths = document.querySelectorAll("#IranMap svg g path");
  svgPaths.forEach(function (pathEl) {
    pathEl.addEventListener("mouseenter", function () {
      const pathClass = this.getAttribute("class");
      // پیدا کردن المان والد g و دریافت کلاس آن
      const parentG = this.closest("g");
      if (!parentG) return;
      const parentClass = parentG.getAttribute("class");

      // جستجوی لینک مربوطه در لیست نقشه
      const targetLink = document.querySelector(
        `#IranMap .list .${parentClass} .${pathClass} a`
      );
      const titleElement = document.querySelector("#IranMap .show-title");

      if (targetLink && titleElement) {
        targetLink.classList.add("hover");
        titleElement.innerHTML = targetLink.innerHTML;
        titleElement.style.display = "block";
      }
    });

    pathEl.addEventListener("mouseleave", function () {
      // حذف کلاس hover از تمام لینک‌ها در لیست
      document.querySelectorAll("#IranMap .list a").forEach(function (link) {
        link.classList.remove("hover");
      });
      // مخفی کردن المان عنوان
      const titleElement = document.querySelector("#IranMap .show-title");
      if (titleElement) {
        titleElement.innerHTML = "";
        titleElement.style.display = "none";
      }
    });
  });

  // اضافه کردن رویداد hover روی لینک‌های لیست نقشه
  const listLinks = document.querySelectorAll("#IranMap .list ul li ul li a");
  listLinks.forEach(function (linkEl) {
    linkEl.addEventListener("mouseenter", function () {
      // دریافت کلاس المان li فعلی
      const currentLI = this.closest("li");
      if (!currentLI) return;
      const currentClass = currentLI.getAttribute("class");

      // دریافت کلاس li والد که در سطح بالاتر قرار دارد
      const parentLI = currentLI.parentElement.closest("li");
      if (!parentLI) return;
      const parentClass = parentLI.getAttribute("class");

      // جستجوی المان مربوط در SVG با استفاده از کلاس‌ها
      const targetPath = document.querySelector(
        `#IranMap svg g.${parentClass} path.${currentClass}`
      );
      if (targetPath) {
        const currentPathClasses = targetPath.getAttribute("class") || "";
        // اطمینان از اضافه شدن کلاس hover (بدون تکرار)
        if (!currentPathClasses.includes("hover")) {
          targetPath.setAttribute("class", currentPathClasses + " hover");
        }
      }
    });

    linkEl.addEventListener("mouseleave", function () {
      const currentLI = this.closest("li");
      if (!currentLI) return;
      const currentClass = currentLI.getAttribute("class");

      const parentLI = currentLI.parentElement.closest("li");
      if (!parentLI) return;
      const parentClass = parentLI.getAttribute("class");

      const targetPath = document.querySelector(
        `#IranMap svg g.${parentClass} path.${currentClass}`
      );
      if (targetPath) {
        const updatedClasses = (targetPath.getAttribute("class") || "").replace(
          " hover",
          ""
        );
        targetPath.setAttribute("class", updatedClasses);
      }
    });
  });

  // تنظیم مکان نمایش عنوان همراه با حرکت موس روی نقشه
  const iranMap = document.getElementById("IranMap");
  if (iranMap) {
    iranMap.addEventListener("mousemove", function (event) {
      const titleElement = document.querySelector("#IranMap .show-title");
      if (!titleElement || !titleElement.innerHTML.trim()) return;

      // محاسبه موقعیت نسبی نقشه
      const mapRect = iranMap.getBoundingClientRect();
      const posX = event.pageX - mapRect.left + 25 + "px";
      const posY = event.pageY - mapRect.top - 5 + "px";

      titleElement.style.left = posX;
      titleElement.style.top = posY;
    });
  }
});
