window.addEventListener("load", function () {

// ==========================
// TOP FLOATING BANNER
// ==========================

function createBanner(position) {

var adBox = document.createElement("div");

adBox.style.position = "fixed";
adBox.style[position] = "10px";
adBox.style.left = "50%";
adBox.style.transform = "translateX(-50%)";
adBox.style.zIndex = "999999";
adBox.style.background = "transparent";

var closeBtn = document.createElement("div");

closeBtn.innerHTML = "&times;";

closeBtn.style.position = "absolute";
closeBtn.style.top = "-10px";
closeBtn.style.right = "-10px";
closeBtn.style.width = "24px";
closeBtn.style.height = "24px";
closeBtn.style.lineHeight = "24px";
closeBtn.style.textAlign = "center";
closeBtn.style.background = "rgba(0,0,0,0.8)";
closeBtn.style.color = "#fff";
closeBtn.style.borderRadius = "50%";
closeBtn.style.cursor = "pointer";
closeBtn.style.fontSize = "18px";
closeBtn.style.fontWeight = "bold";

closeBtn.onclick = function () {
  adBox.style.display = "none";
};

var adContent = document.createElement("div");

var script1 = document.createElement("script");

script1.innerHTML =
  "atOptions={'key':'aacc8245ff87a399e050391c441727a6','format':'iframe','height':50,'width':320,'params':{}};";

var script2 = document.createElement("script");

script2.src =
  "https://bagelstoppage.com/aacc8245ff87a399e050391c441727a6/invoke.js";

adContent.appendChild(script1);
adContent.appendChild(script2);

adBox.appendChild(closeBtn);
adBox.appendChild(adContent);

document.body.appendChild(adBox);

}

// Top Banner
createBanner("top");

// Bottom Banner
createBanner("bottom");

// ==========================
// POP ADS 1
// ==========================

setTimeout(function () {

(function (s) {

  s.dataset.zone = "10922453";
  s.src = "https://al5sm.com/tag.min.js";

})(
  [document.documentElement, document.body]
  .filter(Boolean)
  .pop()
  .appendChild(document.createElement("script"))
);

}, 1000);

// ==========================
// POP ADS 2
// ==========================

setTimeout(function () {

var pop2 = document.createElement("script");

pop2.src =
  "https://bagelstoppage.com/60/5a/2e/605a2ec69525cd4fbcc72fad3a1024ac.js";

document.body.appendChild(pop2);

}, 1500);

// ==========================
// SOCIAL BAR 1
// ==========================

var social1 = document.createElement("script");

social1.src =
"https://bagelstoppage.com/36/15/a2/3615a2628c1d845b3e1faca5065f06d5.js";

document.body.appendChild(social1);

// ==========================
// SOCIAL BAR 2
// ==========================

(function (s) {

s.dataset.zone = "5880443";
s.src = "https://n6wxm.com/vignette.min.js";

})(
[document.documentElement, document.body]
.filter(Boolean)
.pop()
.appendChild(document.createElement("script"))
);

// ==========================
// NATIVE BANNER
// ==========================

var nativeContainer = document.createElement("div");

nativeContainer.id =
"container-778fed03c990209e50c1842c8c388a17";

document.body.appendChild(nativeContainer);

var nativeScript = document.createElement("script");

nativeScript.async = true;
nativeScript.setAttribute("data-cfasync", "false");

nativeScript.src =
"https://bagelstoppage.com/778fed03c990209e50c1842c8c388a17/invoke.js";

document.body.appendChild(nativeScript);

});
