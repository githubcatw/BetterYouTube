// this is the code which will be injected into a given page...

(function() {

// edit stylesheet
var _BYTF_style = document.getElementsByClassName("css-httpsfontsgoogleapiscomcssfamilyRoboto400300300italic400italic500500italic700700italic")[0];
_BYTF_style.href = "https://fonts.googleapis.com/css?family=Roboto:100,300,300italic,400italic,500,500italic,700,700italic";
// remove the button text
document.getElementsByClassName("style-scope ytd-button-renderer style-default size-default")[3].innerHTML = "";
document.getElementsByClassName("style-scope ytd-button-renderer style-default size-default")[5].innerHTML = "";
// Edge Polymer block bypass
if (navigator.userAgent.contains('Edg')
Object.defineProperty(navigator, 'userAgent', {
    get: function () { return 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.105 Safari/537.36'; }
});

})();