function copyTextToClipboard(text) {
  var copyFrom = document.createElement("textarea");
  copyFrom.textContent = text;
  document.body.appendChild(copyFrom);
  copyFrom.select();
  document.execCommand('copy');
  copyFrom.blur();
  document.body.removeChild(copyFrom);
}
chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript(null, {
        code: `document.getElementById('content').innerText`,
        allFrames: false,
        runAt: 'document_start',
    }, function(results) {
        var result = results[0];
        copyTextToClipboard(result);
    });
});