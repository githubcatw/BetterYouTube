// this is the background code...

chrome.tabs.onUpdated.addListener(function(id, info, tab){
    chrome.tabs.executeScript(null, {"file": "inject.js"});
});