// this is the code which will be injected into a given page...

(function() {

// edit stylesheet
var _BYTF_style = document.getElementsByClassName("css-httpsfontsgoogleapiscomcssfamilyRoboto400300300italic400italic500500italic700700italic")[0];
_BYTF_style.href = "https://fonts.googleapis.com/css?family=Roboto:100,300,300italic,400italic,500,500italic,700,700italic";
// remove the button text
document.getElementsByClassName("style-scope ytd-button-renderer style-default size-default")[3].innerHTML = "";
document.getElementsByClassName("style-scope ytd-button-renderer style-default size-default")[5].innerHTML = "";
// erase chat
document.getElementsByClassName("style-scope ytd-notification-topbar-button-renderer")[0].innerHTML = "";

})();