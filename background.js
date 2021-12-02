chrome.webNavigation.onCompleted.addListener(
  function () {
    chrome.tabs.insertCSS(null, { file: "dark_mode.css" });
  },
  {
    url: [
      {
        hostContains: "my.epitech.eu",
      },
    ],
  }
);
