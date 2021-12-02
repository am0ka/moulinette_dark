let state = false;

chrome.browserAction.onClicked.addListener(function (tab) {
  if (!state) {
    chrome.tabs.insertCSS(null, { file: "dark_mode.css" });
    state = !state;
  } else {
    chrome.tabs.removeCSS(null, { file: "dark_mode.css" });
    state = !state;
  }
});
