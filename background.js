chrome.webNavigation.onCompleted.addListener(
  function () {
    chrome.tabs.insertCSS(null, { file: "dark_mode.css" });
    chrome.tabs.executeScript(null, { file: "script.js" });
  },
  {
    url: [
      {
        hostContains: "my.epitech.eu",
      },
    ],
  }
);
