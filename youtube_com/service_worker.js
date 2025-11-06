"use strict";

chrome.commands.onCommand.addListener((command, tab) => {
  // Only present if the extension has the "tabs" permission or a matching host permissions.
  if (!tab.url) {
    return;
  }

  switch (command) {
    case "toggle-comments":
      executeScript(tab, toggleComments);
      break;
    case "toggle-secondary":
      executeScript(tab, toggleSecondary);
      break;
  }
});

function executeScript(tab, func) {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: func
  });
}

function toggleComments() {
  document.body.classList.toggle("yt-show-comments");
}

function toggleSecondary() {
  document.body.classList.toggle("yt-show-secondary");
}
