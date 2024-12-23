chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'openInBackground') {
    chrome.tabs.create({ 
      url: request.url, 
      active: false 
    });
  }
}); 