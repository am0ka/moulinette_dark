  const lightCircles = "rgba(255, 255, 255, 0.8)";
  const darkCircles = "rgba(0, 0, 0, 0.54)";
  const circles = Array.from(document.getElementsByTagName("svg"))
    .map((el) => el.firstElementChild)
    .map((el) => el.lastElementChild)
    .filter((el) => el)
    .filter((el) => el.hasAttribute("fill"));
  const suppTexts = Array.from(document.getElementsByTagName("text")).filter(
    (el) => el.hasAttribute("fill")
  );
  circles
    .filter((el) => el.getAttribute("fill") === lightCircles)
    .map((el) => el.setAttribute("fill", darkCircles));
  suppTexts.map((el) => el.setAttribute("fill", "white"));