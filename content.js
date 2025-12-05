chrome.runtime.onMessage.addListener((request) => {
  if (request.color === 'reset') {
    document.body.style.backgroundColor = '';
  } else {
    document.body.style.backgroundColor = request.color;
  }
});
