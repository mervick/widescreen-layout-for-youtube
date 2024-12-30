let lastUrl = location.href;

const observeChange = () => {
  const observer = new MutationObserver(() => {
    if (location.href !== lastUrl) {
      lastUrl = location.href;
      console.log("Video changed:", lastUrl);
      updatePage();
    }
  });

  observer.observe(document, { subtree: true, childList: true });
};

function callResizeEvent() {
  const resizeEvent = new Event('resize');
  window.dispatchEvent(resizeEvent);
}

const updatePage = () => {
  callResizeEvent();
  setTimeout(callResizeEvent, 1000);
};

observeChange();
updatePage();
setTimeout(callResizeEvent, 200);
setTimeout(callResizeEvent, 500);
setTimeout(callResizeEvent, 2000);
