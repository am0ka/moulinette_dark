let state = false;

function toggleFader(stateToggle) {
  const lightCircles = "rgba(255,255,255,.8)";
  const darkCircles = "rgba(0,0,0,.3)";
  const circles = Array.from(document.getElementsByTagName("svg"))
    .map(el => el.firstElementChild)
    .map(el => el.lastElementChild)
    .filter(el => el)
    .filter(el => el.hasAttribute("fill"));

  if (!stateToggle) {
    circles
      .filter(el => el.getAttribute("fill") === lightCircles)
      .map(el => el.setAttribute("fill", darkCircles))
  } else {
    circles
      .filter(el => el.getAttribute("fill") === darkCircles)
      .map(el => el.setAttribute("fill", lightCircles))
  }
}
function toggleRedCircle(stateToggle) {
  const redCircles = Array.from(document.getElementsByTagName("svg"));

  if (!stateToggle) {
    redCircles
      .filter(el => el.getAttribute("fill") === "red")
      .map(el => el.setAttribute("fill", "rgba(96, 40, 40, .5)"));
  } else {
    redCircles
      .filter(el => el.getAttribute("fill") === "rgba(96, 40, 40, .5)")
      .map(el => el.setAttribute("fill", "red"));
  }
}
function toggleText(stateToggle) {
  const suppTexts = Array.from(document.getElementsByTagName("text"))
    .filter(el => el.hasAttribute("fill"));
  if (!stateToggle) {
    suppTexts.map(el => el.setAttribute("fill", "white"));
  } else {
    suppTexts.map(el => el.setAttribute("fill", "grey"));
  }
}
function toggleSVG(stateToggle) {
  toggleFader(stateToggle);
  toggleRedCircle(stateToggle);
  toggleText(stateToggle);
}

chrome.browserAction.onClicked.addListener(function (tab) {
  const style = document.createElement('link');
    style.id = ""
    style.rel = 'stylesheet';
    style.type = 'text/css';
    style.href = chrome.extension.getURL('dark_mode.css');
  toggleSVG(state);
  if (!state) {
    document.head.appendChild(style);
    state = !state;
  } else {
    document.head.removeChild(style);
    state = !state;
  }
})
