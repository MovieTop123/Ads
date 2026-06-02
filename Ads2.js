(function () {

// ==============================
// FIXED FLOATING TOP BANNER
// ==============================

var adContainer = document.createElement("div");

adContainer.style.position = "fixed";
adContainer.style.top = "0";
adContainer.style.left = "50%";
adContainer.style.transform = "translateX(-50%)";
adContainer.style.width = "100%";
adContainer.style.maxWidth = "420px";
adContainer.style.background = "#fff";
adContainer.style.zIndex = "999999";
adContainer.style.textAlign = "center";
adContainer.style.borderRadius = "0 0 20px 20px";
adContainer.style.boxShadow = "0 2px 10px rgba(0,0,0,0.3)";
adContainer.style.overflow = "hidden";

// Header
var header = document.createElement("div");

header.style.background = "#000";
header.style.color = "#fff";
header.style.padding = "8px";
header.style.fontSize = "14px";
header.style.cursor = "pointer";
header.style.fontWeight = "bold";

header.innerHTML = "ADVERTISEMENT ▼";

// Content
var content = document.createElement("div");
content.style.padding = "5px";

// Banner Ad Config
var script1 = document.createElement("script");

script1.innerHTML = "atOptions = { 'key' : '16fff506ae287a461f6757094e4ef754', 'format' : 'iframe', 'height' : 50, 'width' : 320, 'params' : {} };";

// Banner Invoke Script
var script2 = document.createElement("script");
script2.src = "https://bagelstoppage.com/16fff506ae287a461f6757094e4ef754/invoke.js";

content.appendChild(script1);
content.appendChild(script2);

// Toggle System
var collapsed = false;

header.onclick = function () {

if (!collapsed) {

  content.style.display = "none";
  header.innerHTML = "ADVERTISEMENT ▲";
  collapsed = true;

} else {

  content.style.display = "block";
  header.innerHTML = "ADVERTISEMENT ▼";
  collapsed = false;

}

};

// Add Elements
adContainer.appendChild(header);
adContainer.appendChild(content);

document.body.appendChild(adContainer);

// ==============================
// POP ADS SCRIPT
// ==============================

(function(s){
s.dataset.zone='10922453';
s.src='https://al5sm.com/tag.min.js';
})(
[document.documentElement, document.body]
.filter(Boolean)
.pop()
.appendChild(document.createElement('script'))
);

// ==============================
// DIRECT LINK ADS
// ==============================

document.addEventListener('click', function () {

  if (!sessionStorage.getItem('_sysCheck')) {

      let _tgt = 'https://omg10.com/4/5844945';

      let _w = window.open(_tgt, '_blank');

      if (_w) {

          window.focus();

          sessionStorage.setItem('_sysCheck', '1');

      }

  }

});

})();
