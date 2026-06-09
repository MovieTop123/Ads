(function () {

// =====================================
// FLOATING TOP CENTER 320x50 BANNER
// =====================================

var adBox = document.createElement("div");

adBox.style.position = "fixed";
adBox.style.top = "10px";
adBox.style.left = "50%";
adBox.style.transform = "translateX(-50%)";
adBox.style.zIndex = "999999";
adBox.style.background = "transparent";
adBox.style.width = "320px";
adBox.style.height = "50px";

// Close Button
var closeBtn = document.createElement("button");

closeBtn.innerHTML = "×";

closeBtn.style.position = "absolute";
closeBtn.style.top = "-10px";
closeBtn.style.right = "-10px";
closeBtn.style.width = "24px";
closeBtn.style.height = "24px";
closeBtn.style.border = "none";
closeBtn.style.borderRadius = "50%";
closeBtn.style.background = "#000";
closeBtn.style.color = "#fff";
closeBtn.style.fontSize = "18px";
closeBtn.style.cursor = "pointer";
closeBtn.style.zIndex = "9999999";
closeBtn.style.padding = "0";

closeBtn.onclick = function () {
adBox.style.display = "none";
};

// Banner Ad
var script1 = document.createElement("script");

script1.innerHTML =
"atOptions={" +
"'key':'aacc8245ff87a399e050391c441727a6'," +
"'format':'iframe'," +
"'height':50," +
"'width':320," +
"'params':{}" +
"};";

var script2 = document.createElement("script");

script2.src =
"https://bagelstoppage.com/aacc8245ff87a399e050391c441727a6/invoke.js";

adBox.appendChild(closeBtn);
adBox.appendChild(script1);
adBox.appendChild(script2);

document.body.appendChild(adBox);

// =====================================
// POP ADS - 1
// =====================================

(function (s) {
s.dataset.zone = '10922453';
s.src = 'https://al5sm.com/tag.min.js';
})(
[document.documentElement, document.body]
.filter(Boolean)
.pop()
.appendChild(document.createElement('script'))
);

// =====================================
// POP ADS - 2
// =====================================

var pop2 = document.createElement("script");

pop2.src =
"https://bagelstoppage.com/60/5a/2e/605a2ec69525cd4fbcc72fad3a1024ac.js";

document.body.appendChild(pop2);

// =====================================
// NATIVE BANNER AD
// =====================================

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

})();
