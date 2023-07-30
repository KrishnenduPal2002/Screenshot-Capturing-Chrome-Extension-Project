window.onload = function() {
    const captureBtn = document.getElementById('capture-btn');
    const screenshotImg = document.getElementById('screenshot-img');
  
    captureBtn.addEventListener('click', () => {
      chrome.tabs.captureVisibleTab(null, { format: 'png' }, (screenshotUrl) => {
        captureBtn.innerHTML = "ScreenShot Captured";
        screenshotImg.src = screenshotUrl;
      });
    });
  };