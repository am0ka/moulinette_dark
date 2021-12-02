const main = () => {
  const lightCircles = "rgba(255,255,255,.8)";
  const darkCircles = "rgba(0,0,0,.3)";
  const circles = Array.from(document.getElementsByTagName("svg"))
    .map((el) => el.firstElementChild)
    .map((el) => el.lastElementChild)
    .filter((el) => el)
    .filter((el) => el.hasAttribute("fill"));
  const redCircles = Array.from(document.getElementsByTagName("svg"));
  const suppTexts = Array.from(document.getElementsByTagName("text")).filter(
    (el) => el.hasAttribute("fill")
  );
  const state = document.getElementById("notificationClicked");
  if (!state) {
    circles
      .filter((el) => el.getAttribute("fill") === lightCircles)
      .map((el) => el.setAttribute("fill", darkCircles));
    redCircles
      .filter((el) => el.getAttribute("fill") === "red")
      .map((el) => el.setAttribute("fill", "rgba(96, 40, 40, .5)"));
    suppTexts.map((el) => el.setAttribute("fill", "white"));
  } else {
    circles
      .filter((el) => el.getAttribute("fill") === darkCircles)
      .map((el) => el.setAttribute("fill", lightCircles));
    redCircles
      .filter((el) => el.getAttribute("fill") === "rgba(96, 40, 40, .5)")
      .map((el) => el.setAttribute("fill", "red"));
    suppTexts.map((el) => el.setAttribute("fill", "grey"));
  }
}

window.onload = main;