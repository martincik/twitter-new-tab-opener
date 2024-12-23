function addNewTabButtons() {
  // Find all tweet articles that don't have our button yet
  const tweets = document.querySelectorAll('article:not(.newtab-processed)');
  
  tweets.forEach(tweet => {
    // Find the action group (where retweet, like buttons are)
    const actionGroup = tweet.querySelector('[role="group"]');
    if (!actionGroup) return;
    
    // Check if button already exists in this action group
    if (actionGroup.querySelector('.tweet-newtab-button')) return;
    
    // Find the tweet link
    const tweetLink = tweet.querySelector('a[href*="/status/"]');
    if (!tweetLink) return;
    
    // Create new button
    const button = document.createElement('div');
    button.className = 'tweet-newtab-button';
    button.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="rgb(29, 155, 240)">
      <path d="M5 19L19 5M19 5H10M19 5V14" stroke="rgb(29, 155, 240)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`;
    button.title = 'Open tweet in new tab (background)';
    
    // Add click handler
    button.addEventListener('click', e => {
      e.preventDefault();
      e.stopPropagation();
      
      chrome.runtime.sendMessage({
        action: 'openInBackground',
        url: tweetLink.href
      });
    });
    
    // Add button to the action group
    actionGroup.appendChild(button);
    
    // Mark as processed
    tweet.classList.add('newtab-processed');
  });
}

// Run initially
addNewTabButtons();

// Create an observer to watch for new tweets being added
const observer = new MutationObserver(() => {
  addNewTabButtons();
});

// Start observing the timeline
observer.observe(document.body, {
  childList: true,
  subtree: true
});