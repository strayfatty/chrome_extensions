'use strict';

chrome.commands.onCommand.addListener(command => {
  if (command === 'suspend-tab') {
    queryCurrentTab(suspendTab);
  }
});

function queryCurrentTab(callback) {
  chrome.tabs.query({
    currentWindow: true,
    active: true
  }, (tabs) => callback(tabs[0]));
}

function suspendTab(tab) {
  let url = chrome.runtime.getURL("suspended.html")
  url += `?uri=${encodeURIComponent(tab.url)}`;
  url += `&title=${encodeURIComponent(tab.title)}`
  url += `&favIconUrl=${encodeURIComponent(tab.favIconUrl)}`
  chrome.tabs.update(tab.id, { url: url });
}
